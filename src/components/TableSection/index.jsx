import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { deleteSaved } from "../../redux/NewsSlice";
import Table from "react-bootstrap/Table";

const TableSection = ({ headers, datas }) => {
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteSaved(id));
                Swal.fire(
                    "Deleted!",
                    "Item deleted.",
                    "success"
                )
            }
        });
    };

    return (
        <Table striped bordered hover className="m-4" style={{ width: "95%" }}>
            <thead>
                <tr>
                    {
                        headers.map((header, headerIdx) => {
                            return <th key={headerIdx}>{header}</th>
                        })
                    }
                </tr>
            </thead>
            <tbody>
                {
                    datas?.map((data, dataIdx) => {
                        return (
                            <tr key={dataIdx}>
                                <td>{data.source.name}</td>
                                <td>{data.title}</td>
                                <td>{data.description}</td>
                                <td style={{ color: "red", cursor: "pointer" }} onClick={() => handleDelete(data.id)}>Delete</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>
    );
}

export default TableSection;