import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import '../../css/dataroom.css';

export default function BoardList() {
    const myPort = process.env.REACT_APP_MY_PORT;
    const token = sessionStorage.getItem("token");
    const loginid = sessionStorage.getItem("loginid");
    const navigate = useNavigate();
    const [list, setList] = useState([]);
    const [mdto, setDto] = useState({});
    const { ismaster } = mdto;

    useEffect(() => {
        axios.get(`http://localhost:${myPort}/auth/board`, { headers: { Authorization: token } })
            .then(
                function (res) {
                    if (res.status === 200) {
                        setList(res.data.list);
                        let m = res.data.mdto;
                        setDto({
                            ismaster: m.isMaster
                        })
                    } else {
                        alert('error:' + res.status);
                    }
                }
            );
    }, [])

    const del = (num) => {
        axios.post(`http://localhost:${myPort}/auth/board/del`,
            {},
            {
                headers: { Authorization: token },
                params: { num: num }
            }
        )
            .then(function (res) {
                if (res.status === 200) {
                    setList(res.data.list);
                } else {
                    alert(res.status);
                }
            });
    }

    return (

        <div className="dataroom">
            <div className="main-content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header card-header-danger">
                                    <h2 className="card-title">자유게시판</h2>
                                    <div className="card-header cursor-pointer d-flex justify-content-between align-items-center">
                                        <div className="btn btn-icon btn-active-light-primary w-60px h-60px w-md-60px h-md-60px align-self-center"
                                            data-kt-menu-trigger="click" data-kt-menu-attach="parent"
                                            data-kt-menu-placement="bottom-end" data-kt-menu-flip="bottom">
                                            <a href={`/board/add`}><i className="bi bi-person-plus-fill">글 작성</i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table id="kt_datatable_example_2" className="table table-striped table-row-bordered gy-5 gs-7">
                                            <thead>
                                                <tr className="fw-bold fs-6 text-gray-800">
                                                    <th>글번호</th>
                                                    <th>이름</th>
                                                    <th>직급</th>
                                                    <th>제목</th>
                                                    <th>작성일</th>
                                                    <th>수정일</th>
                                                    <th>조회수</th>
                                                    <th>수정</th>
                                                    <th>삭제</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {list.map((b) => (
                                                    <tr>
                                                        <td>{b.num}</td>
                                                        <td>{b.member.name}</td>
                                                        <td>{b.member.companyRankName}</td>
                                                        <td>
                                                            <Link to={`/board/detail/${b.num}`} className="link">
                                                                {b.title}
                                                            </Link>
                                                        </td>
                                                        <td>{b.wdate}</td>
                                                        <td>{b.udate}</td>
                                                        <td>{b.cnt}</td>
                                                        <td style={{ padding: '2px' }}>
                                                            {(loginid === b.member.username || ismaster === 1) && (
                                                                <div className="btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px align-self-center"
                                                                    data-kt-menu-trigger="click" data-kt-menu-attach="parent"
                                                                    data-kt-menu-placement="bottom-end" data-kt-menu-flip="bottom">
                                                                    <Link to={`/board/edit/${b.num}`}><i className="bi bi-pencil"></i>
                                                                    </Link>
                                                                </div>
                                                            )}
                                                        </td>
                                                        <td style={{ padding: '2px' }}>
                                                            {(loginid === b.member.username || ismaster === 1) && (
                                                                <div className="btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px align-self-center"
                                                                    data-kt-menu-trigger="click" data-kt-menu-attach="parent"
                                                                    data-kt-menu-placement="bottom-end" data-kt-menu-flip="bottom">
                                                                    <a onClick={() => del(b.num)}><i className="bi bi-trash-fill del"></i>
                                                                    </a>
                                                                </div>

                                                            )}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );

}
