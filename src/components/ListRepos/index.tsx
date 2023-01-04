
interface ReposProps {
    full_name: string;
    html_url: string
}

interface IListProps {
    style: any;
    repos: Array<ReposProps>

}

export function ListRepos({ style, repos }: IListProps) {

    const ListFormated = repos.map((repo, index) => {
        return (
            <li key={index}>
                <a href={repo?.html_url}>
                    <span>{index + 1}-</span>{repo?.full_name.split("RenanGava/")}
                </a>
            </li>
        )
    })
    return (
        <ul className={style.Repos}>
            {ListFormated}
        </ul>
    )
}