import React, { ChangeEvent, ReactElement, useCallback, useState } from 'react';
import useFetch from 'components/hooks/useFetch';
import GameListRender from './GameList.render';
import { Filter } from './types';

const GameListContainer = (): ReactElement => {
    const [filter, setFilter] = useState<Filter>({
        platform: 'browser',
        sortBy: 'relevance',
    });
    const { games, error } = useFetch(filter);

    const onFilterChange = useCallback((e: ChangeEvent<HTMLFormElement>) => {
        setFilter((current) => ({
            ...current,
            [e.target.name]: event?.target.value,
        }));
        e.preventDefault();
    }, []);
    return (
        <GameListRender
            err={error}
            games={games}
            onFilterChange={onFilterChange}
        />
    );
};

export default GameListContainer;
