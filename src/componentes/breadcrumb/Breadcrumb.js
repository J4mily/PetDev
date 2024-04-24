import { Link, useLocation } from "react-router-dom";

export default function Breadcrumb(){
    const location = useLocation();

    let linkAtual = ''

    const crumbs = location.pathname.split('/')
    .filter(crumb => crumb !== '')
    .map(crumb => {
        linkAtual += `/${crumb}`

        return (
            <div className ="crumb" key={crumb}>
                <Link to={linkAtual}>{crumb}</Link>
            </div>
        )
    })
    return (
        <div className="breadcrumb">
            {crumbs}
        </div>
    )
}