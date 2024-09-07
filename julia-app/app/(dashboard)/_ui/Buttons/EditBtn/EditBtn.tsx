import "@/app/(dashboard)/_style/_ui/EditBtn/edit-btn.scss";

interface IEditBtn {
    edit: boolean
    action: any
}
const EditBtn = ({ edit, action }: IEditBtn) => {
    return (
        <button className="editBtn" type="button" onClick={action}>{edit ? "[Редактировать]" : "[Удалить]"}</button>
    )
}

export default EditBtn