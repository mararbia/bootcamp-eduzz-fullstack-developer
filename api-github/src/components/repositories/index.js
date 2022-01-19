import React, { useEffect, useState } from 'react'
import useGithub from "../../hooks/github-hooks"
import RepositoryItem from "../repository-item"
import * as S from "./styled"

const Repositories = () => {

    const { githubState, getUserRepos, getUserStarred } = useGithub();
    const [hasUserForSearchepos, setHasUserForSearchRepos] = useState(false);

    useEffect(() => {
        if (githubState.user.login) {
            getUserRepos(githubState.user.login)
            getUserStarred(githubState.user.login)
        }
        setHasUserForSearchRepos(githubState.repositories)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [githubState.user.login])
    
    return (
        <>
            {hasUserForSearchepos ? (
                <S.WrapperTabs
                selectedTabClassName="is-selected"
                selectedTabPanelClassName="is-selected"
                >
                    <S.WrapperList>
                        <S.WrapperTab>Repositories</S.WrapperTab>
                        <S.WrapperTab>Starred</S.WrapperTab>
                    </S.WrapperList>
                    <S.WrapperTabPanel>
                        <S.WrapperTabList>
                            {githubState.repositories.map((item) => (
                                <RepositoryItem 
                                key={item.id}
                                name={item.name}
                                linkToRepo={item.linkToRepo}
                                fullname={item.full_name}
                                />
                            ))}
                        </S.WrapperTabList>
                    </S.WrapperTabPanel>
                    <S.WrapperTabPanel>
                        <S.WrapperTabList>
                            {githubState.starred.map((item) => (
                                <RepositoryItem
                                    key={item.id}
                                    name={item.name}
                                    linkToRepo={item.linkToRepo}
                                    fullname={item.full_name}
                                />
                            ))}
                        </S.WrapperTabList>
                    </S.WrapperTabPanel>
                </S.WrapperTabs>
            ) : (
                <></>
            )}
        </>
    )
}

export default Repositories
