import css from "./LogOutModal.module.css"

const LogOutModal = () => {
  return (
    <div className={css.modalBox}>
      <p className={css.title}>Log out</p>
      <p className={css.text}>Do you really want to leave? </p>
      <div className={css.btnBox}>
      <button className={css.logOutBtn}>Log out</button>
      <button className={css.cancelBtn}>Cancel</button>
      </div>

    </div>
  )
}

export default LogOutModal
