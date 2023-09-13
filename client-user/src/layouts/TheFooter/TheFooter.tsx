import { useThemeContext } from "@/stores/app.context";
import  "./TheFooter.less";
const TheFooter = ()=>{
    const theme = useThemeContext()
    return <footer className={`footer ${theme.darkMode ? 'bg-black': 'bg-white'}`}>
        <div className="footer__container">
            <div className="">
                <h4>title</h4>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto sit tempora mollitia atque dolore autem esse obcaecati eligendi, eaque, doloribus similique commodi enim pariatur! Quidem velit esse voluptas. Consequatur, corporis.
                </p>
            </div>
            <div className="">
                <h4>title</h4>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto sit tempora mollitia atque dolore autem esse obcaecati eligendi, eaque, doloribus similique commodi enim pariatur! Quidem velit esse voluptas. Consequatur, corporis.
                </p>
            </div>
            <div className="">
                <h4>title</h4>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto sit tempora mollitia atque dolore autem esse obcaecati eligendi, eaque, doloribus similique commodi enim pariatur! Quidem velit esse voluptas. Consequatur, corporis.
                </p>
            </div>
            <div className="">
                <h4>title</h4>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto sit tempora mollitia atque dolore autem esse obcaecati eligendi, eaque, doloribus similique commodi enim pariatur! Quidem velit esse voluptas. Consequatur, corporis.
                </p>
            </div>
        </div>
    </footer>
}
export default TheFooter