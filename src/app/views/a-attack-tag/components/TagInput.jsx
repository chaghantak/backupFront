import { BASE_URL } from "app/views/api";
import axios from "axios";
import React, { useCallback, useEffect, useRef, useState } from "react";

function TagInput() {
    const [data, setData] = useState([]);
    const [keyword, setKeyword] = useState("");
    const [toggle, setToggle] = useState(false);
    const [hide, setHide] = useState("");
    const inputRef = useRef(null);
    const onChange = useCallback((e) => {
        setKeyword(e.target.value);
        setToggle(true);
    }, [setKeyword]);

    const onClick = (ttp) => {
        setKeyword(ttp);
        setToggle(false);
    };

    const backOn = (data) => {
        setHide(data);
    };

    const inputClear = useCallback(() => {
        setKeyword("");
        inputRef.current.focus();
    }, [setKeyword]);

    useEffect(() => {
        axios({
            url: `${BASE_URL}/campaign/tactic-info`,
            method: "POST",
            data: {},
        }).then(({ data }) => {
            setData(data.item);
        });
    }, []);

    return (
        <>
            <input
                type="text"
                onChange={onChange}
                value={keyword}
                placeholder="입력"
                ref={inputRef}
            />
            <button
                style={{
                    zIndex: 1,
                    transform: "translate(-20px,0%)",
                    border: 0,
                    outline: 0,
                }}
                onClick={inputClear}
            >
                x
            </button>
            <button
                style={{
                    transform: "translate(-20px,0%)",
                }}
            >
                제출
            </button>
            <button
                style={{
                    transform: "translate(-20px,0%)",
                }}
            >
                삭제
            </button>
            {toggle ? (
                <div
                    style={{
                        zIndex: 2,
                        border: "black solid 1px",
                        overflow: "auto",
                        height: "16vh",
                        width: "300px",
                        position: "absolute",
                        backgroundColor: "skyblue",
                    }}
                >
                    {keyword === ""
                        ? `""${setToggle(false)} `
                        : data.map((info) => (
                            <div
                                key={info.index}
                                style={
                                    hide === info.ttp
                                        ? { backgroundColor: "skyblue", cursor: "pointer" }
                                        : { backgroundColor: "white", cursor: "pointer" }
                                }
                                onClick={() => onClick(info.ttp)}
                                onMouseOver={() => {
                                    backOn(info.ttp);
                                }}
                                onMouseOut={() => {
                                    backOn(null);
                                }}
                            >
                                {info.ttp.includes(
                                    info.ttp.match(new RegExp(keyword, "i"))
                                ) ? (
                                    <>
                                        {info.subtechnique_name.length === 0 ? (
                                            <>
                                                {
                                                    info.ttp.split(
                                                        info.ttp.match(new RegExp(keyword, "i"))
                                                    )[0]
                                                }
                                                <span style={{ color: "red" }}>
                            {info.ttp.match(new RegExp(keyword, "i"))}
                          </span>
                                                {
                                                    info.ttp.split(
                                                        info.ttp.match(new RegExp(keyword, "i"))
                                                    )[1]
                                                }{" "}
                                                :{info.technique_name}
                                            </>
                                        ) : (
                                            <>
                                                {
                                                    info.ttp.split(
                                                        info.ttp.match(new RegExp(keyword, "i"))
                                                    )[0]
                                                }
                                                <span style={{ color: "red" }}>
                            {info.ttp.match(new RegExp(keyword, "i"))}
                          </span>
                                                {
                                                    info.ttp.split(
                                                        info.ttp.match(new RegExp(keyword, "i"))
                                                    )[1]
                                                }{" "}
                                                :{info.subtechnique_name}
                                            </>
                                        )}
                                    </>
                                ) : info.tactic_name.includes(
                                    info.tactic_name.match(new RegExp(keyword, "i"))
                                ) ? (
                                    <>
                                        {info.ttp}:
                                        {
                                            info.tactic_name.split(
                                                info.tactic_name.match(new RegExp(keyword, "i"))
                                            )[0]
                                        }
                                        <span style={{ color: "red" }}>
                        {info.tactic_name.match(new RegExp(keyword, "i"))}
                      </span>
                                        {
                                            info.tactic_name.split(
                                                info.tactic_name.match(new RegExp(keyword, "i"))
                                            )[1]
                                        }
                                    </>
                                ) : info.technique_name.includes(
                                    info.technique_name.match(new RegExp(keyword, "i"))
                                ) ? (
                                    <>
                                        {info.ttp}:
                                        {
                                            info.technique_name.split(
                                                info.technique_name.match(new RegExp(keyword, "i"))
                                            )[0]
                                        }
                                        <span style={{ color: "red" }}>
                        {info.technique_name.match(new RegExp(keyword, "i"))}
                      </span>
                                        {
                                            info.technique_name.split(
                                                info.technique_name.match(new RegExp(keyword, "i"))
                                            )[1]
                                        }
                                    </>
                                ) : info.subtechnique_name.includes(
                                    info.subtechnique_name.match(new RegExp(keyword, "i"))
                                ) ? (
                                    <>
                                        {info.ttp}:
                                        {
                                            info.subtechnique_name.split(
                                                info.subtechnique_name.match(new RegExp(keyword, "i"))
                                            )[0]
                                        }
                                        <span style={{ color: "red" }}>
                        {info.subtechnique_name.match(new RegExp(keyword, "i"))}
                      </span>
                                        {
                                            info.subtechnique_name.split(
                                                info.subtechnique_name.match(new RegExp(keyword, "i"))
                                            )[1]
                                        }
                                    </>
                                ) : null}
                            </div>
                        ))}
                </div>
            ) : null}
        </>
    );
}
export default TagInput;
