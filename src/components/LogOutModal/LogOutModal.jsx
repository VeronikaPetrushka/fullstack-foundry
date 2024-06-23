import css from "./LogOutModal.module.css"

const LogOutModal = () => {
  return (
    <div className={css.modalBox}>
      <p className={css.title}>Log Out</p>
      <p className={css.text}>Do you really want to leave? </p>
      <button>Log Out</button>
      <button>Cancel</button>
    </div>
  )
}

export default LogOutModal
