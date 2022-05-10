import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar, SnackbarProvider } from "notistack";
import { removeSnackbar } from "../../redux/actions/SnackBarAction";
import Fade from "@material-ui/core/Fade"

let displayed = [];

function StackedSnackbarLayout(){
    const dispatch = useDispatch();
    const msgs = useSelector(store => store.snackbar.msgs || []);
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const storeDisplayed = (id) => {
        displayed = [...displayed, id];
    };

    const removeDisplayed = (id) => {
        displayed = [...displayed.filter(key=>id!==key)];
    }

    React.useEffect(() => {
        msgs.forEach(({key, message, options ={}, dismissed = false}) => {
            if(dismissed){
                closeSnackbar(key);
                return;
            }

            if(displayed.includes(key)) return;

            enqueueSnackbar(message, {
                key, 
                ...options,
                onClose: (event, reason, myKey) => {
                    if (options.onClose) {
                        options.onClose(event, reason, myKey);
                    }
                },
                onExited: (event, myKey) => {
                    dispatch(removeSnackbar(myKey));
                    removeDisplayed(myKey);
                }
            });

            storeDisplayed(key);
        });
    }, [msgs, closeSnackbar, enqueueSnackbar, dispatch]);

    // return (
    //     <SnackbarProvider maxSnack={3}>
    //         <React.Fragment></React.Fragment>
    //     </SnackbarProvider>
    // );

    return null;
}

export default function IntegrationNotistack() {
    return (
        <SnackbarProvider maxSnack={3} anchorOrigin={{
            vertical : "top",
            horizontal : "right",
        }}
        TransitionComponent={Fade}
        >
            <StackedSnackbarLayout />
        </SnackbarProvider>
    );
}