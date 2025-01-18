import styles from "./page.module.css";

export default function navBar () {
    return  (
        <div className="header">
            <ul>
                <li><a href>home</a></li>
                <li><a href>search</a></li>
                <li><a href>subscribe</a></li>
            </ul>
        </div>
    );
}