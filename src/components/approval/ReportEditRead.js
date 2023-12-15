import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import ApprovalList1 from './ApprovalList1';
import ApprovalList2 from './ApprovalList2';

const Report = () => {

    const n = useParams().num;
    const token = sessionStorage.getItem("token");
    const myPort = process.env.REACT_APP_MY_PORT;
    const [mdto, setDto] = useState({});
    const [dto, setDto2] = useState({});

    const navigate = useNavigate();
    const { writer, title, content, wdate, serviceLife, classification, approval1,
        approval2, approval1rank, approval2rank, app1username, app2username } = dto;

    const onChange = (e) => {
        const { name, value } = e.target;
        setDto2({
            ...dto,
            [name]: value
        })
    }

    useEffect(() => {
        axios.get(`http://localhost:${myPort}/auth/approval/report/editread/` + n , { headers: { Authorization: token } })
            .then(function (res) {
                if (res.status === 200) {
                    setDto(res.data.mdto);
                    setDto2(res.data.dto);
                } else {
                    alert('error:' + res.status);
                }
            })
            .catch(function (error) {
                alert("오류: " + error.message);
            });
        return () => {
        };
    }, []);

    return (

        <div>
            <span
                style={{
                    fontFamily: '"맑은 고딕"',
                    fontSize: "10pt",
                    lineHeight: "normal",
                    marginTop: 0,
                    marginBottom: 0
                }}
            >
                <span
                    style={{
                        fontFamily: '"맑은 고딕"',
                        fontSize: "10pt",
                        lineHeight: "normal",
                        marginTop: 0,
                        marginBottom: 0
                    }}
                >
                    {/* 문서 헤더 시작*/}
                    <table
                        style={{
                            width: 800,
                            borderCollapse: "collapse !important",
                            color: "black",
                            background: "white",
                            border: "1px solid black",
                            fontSize: 12,
                            fontFamily: "malgun gothic,dotum,arial,tahoma"
                        }}
                    >
                        <colgroup>
                            <col style={{ width: 90 }} />
                            <col style={{ width: 180 }} />
                            <col style={{ width: 90 }} />
                            <col style={{ width: 120 }} />
                            <col style={{ width: 90 }} />
                            <col style={{}} />
                        </colgroup>
                        <tbody>
                            <tr>
                                <td
                                    style={{
                                        padding: 3,
                                        border: "1px solid black",
                                        height: "90px !important",
                                        fontSize: 27,
                                        fontWeight: "bold",
                                        textAlign: "center",
                                        verticalAlign: "middle"
                                    }}
                                    colSpan={2}
                                >
                                    품 &nbsp;의 &nbsp;서
                                </td>
                                <td
                                    style={{
                                        padding: 10,
                                        height: 20,
                                        marginLeft: "vertical-align: middle",
                                        border: "1px solid black",
                                        textAlign: "center"
                                    }}
                                    colSpan={4}
                                >
                                    <table border="1px solid black" style={{ marginLeft: 280 }}>
                                        <tbody>
                                            <tr>
                                                <th
                                                    colSpan={3}
                                                    style={{ border: 0, textAlign: "center", fontSize: 15 }}
                                                >
                                                    [결재선]
                                                </th>
                                            </tr>
                                            <tr style={{ textAlign: "center", fontSize: "small" }}>
                                                <td>기안자</td>
                                                <td
                                                    input type="text"
                                                    id="approval1rankname"
                                                    name="approval1rankname"
                                                >
                                                    1차결재자
                                                </td>
                                                <td
                                                    type="text"
                                                    id="approval2rankname"
                                                    name="approval2rankname"
                                                >
                                                    2차결재자
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    style={{
                                                        width: 70,
                                                        height: 40,
                                                        fontSize: 12,
                                                        textAlign: "center"
                                                    }}
                                                >
                                                    <input
                                                        type="text"
                                                        defaultValue=""
                                                        style={{
                                                            width: 65,
                                                            height: 40,
                                                            fontSize: 12,
                                                            textAlign: "center",
                                                            color: "red"
                                                        }}
                                                        readOnly="true"
                                                    />
                                                    {mdto.name}
                                                </td>
                                                <td
                                                    style={{
                                                        width: 65,
                                                        height: 40,
                                                        fontSize: 12,
                                                        textAlign: "center",
                                                        color: "red"
                                                    }}
                                                    id="ap1"
                                                >
                                                    <input
                                                        type="text"
                                                        id="approvalList1"
                                                        name="approval1"
                                                        defaultValue=""
                                                        style={{
                                                            width: 65,
                                                            height: 40,
                                                            fontSize: 12,
                                                            textAlign: "center",
                                                            color: "red"
                                                        }}
                                                        readOnly="true"
                                                        text="등록"
                                                        value={dto.approval1}
                                                    />
                                                </td>
                                                <td
                                                    style={{
                                                        width: 65,
                                                        height: 40,
                                                        fontSize: 12,
                                                        textAlign: "center",
                                                        color: "red"
                                                    }}
                                                    id="ap2"
                                                >
                                                    <input
                                                        type="text"
                                                        id="approvalList2"
                                                        name="approval2"
                                                        defaultValue=""
                                                        style={{
                                                            width: 65,
                                                            height: 40,
                                                            fontSize: 12,
                                                            textAlign: "center",
                                                            color: "red"
                                                        }}
                                                        readOnly=""
                                                        value={dto.approval2}
                                                    />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td
                                    style={{
                                        padding: 3,
                                        height: 20,
                                        verticalAlign: "middle",
                                        border: "1px solid black",
                                        textAlign: "center",
                                        fontWeight: "bold"
                                    }}
                                >
                                    기안부서
                                </td>
                                <td
                                    style={{
                                        padding: 3,
                                        height: 20,
                                        verticalAlign: "middle",
                                        border: "1px solid black",
                                        textAlign: "left"
                                    }}
                                >
                                    <span
                                        unselectable="on"
                                        contentEditable="false"
                                        className="comp_wrap"
                                        data-cid={8}
                                        data-dsl="{{label:draftDept}}"
                                        data-wrapper=""
                                        style={{
                                            fontFamily: '"malgun gothic", dotum, arial, tahoma',
                                            fontSize: "9pt",
                                            lineHeight: "normal",
                                            marginTop: 0,
                                            marginBottom: 0
                                        }}
                                        data-value=""
                                        data-autotype=""
                                    >
                                        {mdto.deptName}
                                    </span>
                                </td>
                                <td
                                    style={{
                                        padding: 3,
                                        height: 20,
                                        verticalAlign: "middle",
                                        border: "1px solid black",
                                        textAlign: "center",
                                        fontWeight: "bold"
                                    }}
                                >
                                    기 안 일
                                </td>
                                <td
                                    style={{
                                        padding: 3,
                                        height: 20,
                                        verticalAlign: "middle",
                                        border: "1px solid black",
                                        textAlign: "left"
                                    }}
                                >
                                    <span
                                        unselectable="on"
                                        contentEditable="false"
                                        className="comp_wrap"
                                        data-cid={10}
                                        data-dsl="{{label:draftDate}}"
                                        data-wrapper=""
                                        style={{
                                            fontFamily: '"malgun gothic", dotum, arial, tahoma',
                                            fontSize: "9pt",
                                            lineHeight: "normal",
                                            marginTop: 0,
                                            marginBottom: 0
                                        }}
                                        data-value=""
                                        data-autotype=""
                                    >
                                        <input type="date" name="wdate" value={wdate} onChange={onChange} readonly="true"/>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td
                                    style={{
                                        padding: 3,
                                        height: 20,
                                        verticalAlign: "middle",
                                        border: "1px solid black",
                                        textAlign: "center",
                                        fontWeight: "bold"
                                    }}
                                >
                                    기 안 자
                                </td>
                                <td
                                    style={{
                                        padding: 3,
                                        height: 20,
                                        verticalAlign: "middle",
                                        border: "1px solid black",
                                        textAlign: "left"
                                    }}
                                >
                                    <span
                                        unselectable="on"
                                        contentEditable="false"
                                        className="comp_wrap"
                                        data-cid={9}
                                        data-dsl="{{label:draftUser}}"
                                        data-wrapper=""
                                        style={{
                                            fontFamily: '"malgun gothic", dotum, arial, tahoma',
                                            fontSize: "9pt",
                                            lineHeight: "normal",
                                            marginTop: 0,
                                            marginBottom: 0
                                        }}
                                        data-value=""
                                        data-autotype=""
                                        value={mdto.name}
                                    >
                                        {mdto.name}
                                    </span>
                                </td>
                                <td
                                    style={{
                                        padding: 3,
                                        height: 20,
                                        verticalAlign: "middle",
                                        border: "1px solid black",
                                        textAlign: "center",
                                        fontWeight: "bold"
                                    }}
                                >
                                    보존년한
                                </td>
                                <td
                                    style={{
                                        padding: 3,
                                        height: 20,
                                        verticalAlign: "middle",
                                        border: "1px solid black",
                                        textAlign: "left"
                                    }}
                                >
                                    <span
                                        unselectable="on"
                                        contentEditable="false"
                                        className="comp_wrap"
                                        data-cid={11}
                                        data-dsl="{{label:preserveDuration}}"
                                        data-wrapper=""
                                        style={{
                                            fontFamily: '"malgun gothic", dotum, arial, tahoma',
                                            fontSize: "9pt",
                                            lineHeight: "normal",
                                            marginTop: 0,
                                            marginBottom: 0
                                        }}
                                        data-value=""
                                        data-autotype=""
                                    >
                                        <select
                                            className="editor_slt"
                                            style={{ width: "100%" }}
                                            name="serviceLife"
                                            defaultValue="1년"
                                            value={dto.serviceLife} onChange={onChange}
                                        >
                                            <option onSelect={onChange} value={'1년'} selected="selected">1년</option>
                                            <option onSelect={onChange} value={'3년'} >3년</option>
                                            <option onSelect={onChange} value={'5년'} >5년</option>
                                        </select>
                                    </span>
                                </td>
                                <td
                                    style={{
                                        padding: 3,
                                        height: 20,
                                        verticalAlign: "middle",
                                        border: "1px solid black",
                                        textAlign: "center",
                                        fontWeight: "bold"
                                    }}
                                >
                                    비밀등급
                                </td>
                                <td
                                    style={{
                                        padding: 3,
                                        height: 20,
                                        verticalAlign: "middle",
                                        border: "1px solid black",
                                        textAlign: "left"
                                    }}
                                >
                                    <span
                                        unselectable="on"
                                        contentEditable="false"
                                        className="comp_wrap"
                                        data-cid={13}
                                        data-dsl="{{label:securityLevel}}"
                                        data-wrapper=""
                                        style={{
                                            fontFamily: '"malgun gothic", dotum, arial, tahoma',
                                            fontSize: "9pt",
                                            lineHeight: "normal",
                                            marginTop: 0,
                                            marginBottom: 0
                                        }}
                                        data-value=""
                                        data-autotype=""
                                    >
                                        <select
                                            className="editor_slt"
                                            style={{ width: "100%" }}
                                            name="classification"
                                            defaultValue="1등급"
                                            value={dto.classification} onChange={onChange}
                                        >
                                            <option onSelect={onChange} selected="selected">1등급</option>
                                            <option onSelect={onChange}>2등급</option>
                                            <option onSelect={onChange}>3등급</option>
                                            <option onSelect={onChange}>4등급</option>
                                            <option onSelect={onChange}>5등급</option>
                                        </select>
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    {/* 문서 헤더 끝*/}
                    {/* 마진 시작*/}
                    <table
                        style={{
                            width: 800,
                            borderCollapse: "collapse",
                            borderSpacing: 0,
                            border: "1px solid black"
                        }}
                    >
                        <tbody>
                            <tr>
                                <td
                                    style={{
                                        padding: "0px !important",
                                        height: 10,
                                        verticalAlign: "middle",
                                        border: "1px solid black",
                                        fontSize: 9
                                    }}
                                >
                                    <p
                                        style={{
                                            fontFamily: '"맑은 고딕"',
                                            fontSize: "7pt",
                                            lineHeight: 14,
                                            marginTop: 0,
                                            marginBottom: 0
                                        }}
                                    >
                                        <br />
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table
                        style={{
                            width: 800,
                            borderCollapse: "collapse !important",
                            color: "black",
                            background: "white",
                            border: "1px solid black",
                            fontSize: 12,
                            fontFamily: "malgun gothic,dotum,arial,tahoma"
                        }}
                    >
                        <colgroup>
                            <col style={{ width: 90 }} />
                            <col style={{ width: 710 }} />
                        </colgroup>
                        <tbody>
                            <tr>
                                <td
                                    style={{
                                        padding: 3,
                                        height: 20,
                                        verticalAlign: "middle",
                                        border: "1px solid black",
                                        textAlign: "center",
                                        fontWeight: "bold"
                                    }}
                                >
                                    제 &nbsp;&nbsp;&nbsp; 목
                                </td>
                                <td
                                    style={{
                                        padding: 3,
                                        height: 20,
                                        verticalAlign: "middle",
                                        border: "1px solid black",
                                        textAlign: "left"
                                    }}
                                >
                                    <span
                                        unselectable="on"
                                        contentEditable="false"
                                        className="comp_wrap"
                                        data-cid={6}
                                        data-dsl="{{text:subject}}"
                                        data-wrapper=""
                                        style={{
                                            width: "100%",
                                            fontFamily: '"malgun gothic", dotum, arial, tahoma',
                                            fontSize: "9pt",
                                            lineHeight: "normal",
                                            marginTop: 0,
                                            marginBottom: 0
                                        }}
                                        data-value=""
                                    >
                                        <input
                                            className="ipt_editor"
                                            type="text"
                                            style={{ width: 700 }}
                                            placeholder="제목을 입력해주세요"
                                            name="title"
                                            value={dto.title} onChange={onChange}
                                        />
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td
                                    style={{
                                        padding: 3,
                                        height: 540,
                                        verticalAlign: "top",
                                        border: "1px solid black"
                                    }}
                                    colSpan={2}
                                >
                                    <span
                                        unselectable="on"
                                        contentEditable="false"
                                        className="comp_wrap"
                                        data-cid={7}
                                        data-dsl="{{editor}}"
                                        data-wrapper=""
                                        style={{
                                            width: "100%",
                                            fontFamily: '"malgun gothic", dotum, arial, tahoma',
                                            fontSize: "9pt",
                                            lineHeight: "normal",
                                            marginTop: 0,
                                            marginBottom: 0
                                        }}
                                        data-value=""
                                    >
                                        <textarea
                                            cols={128}
                                            rows={32}
                                            placeholder="내용을 작성해주세요"
                                            name="content"
                                            defaultValue={""}
                                            value={dto.content} onChange={onChange}
                                        />

                                    </span>
                                    <br />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    {/* 제목 및 내용 끝 */}
                    {/* 푸터*/}
                    <table
                        style={{
                            width: 800,
                            fontSize: 12,
                            fontFamily: "malgun gothic,dotum,arial,tahoma"
                        }}
                    >
                        <tbody>
                            <tr></tr>
                        </tbody>
                    </table>
                    {/* 푸터 끝*/}
                </span>
                <p
                    style={{
                        fontFamily: '"맑은 고딕"',
                        fontSize: "10pt",
                        lineHeight: 20,
                        marginTop: 0,
                        marginBottom: 0
                    }}
                />
            </span>
        </div>
    )
}

export default Report;