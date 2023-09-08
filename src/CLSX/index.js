import clsx from "clsx"

// import styles from './Button.module.css'
import styles from './ButtonSCSS.module.scss'



//classname
//clsx

//Nếu là ta truyền prop chỉ là 1 cái tên thì prop sẽ có kiểu dữ liệu là boolean
function Button({ primary, test , disabled}) {
    console.log(primary)
    console.log('test ', test)
    //Trường hợp lúc có lúc không 'd-flex'
    // const classes = clsx(styles.btn, {
    //     [styles.primary]: primary,
    //     'd-flex': true
    // })
    //Trường hợp class tĩnh lúc nào cũng có 'd-flex'
    const classes = clsx(styles.btn, 'd-flex', {
        [styles.primary]: primary,
        // [styles.disabled]:disabled
    })
    return (
        <div>
            {/*Làm theo kiểu truyền thống, không qua thư viện
                --> Ta cần nhớ className sẽ nhận vào 1 chuỗi
                - C1: dùng join(' ')
                - C2: dùng ${styles.btn}
            */}
            {/* <button className={[styles.btn, styles.active].join(' ')}>
                Click me!
            </button> */}

            {/* <button className={` ${styles.btn} ${styles.active}`}>
                Click me!
            </button> */}

            {/*Theo kiểu làm trực tiếp trong class*/}
            {/* <button className={clsx(styles.btn, {
                [styles.active]: true
            })}>
                Click me 1!
            </button> */}
            {/*Theo kiểu làm class động làm thông qua props*/}
            <button  className={classes}>
                Click me 1!
            </button>
        </div>
    )
}

export default Button