/**
 *
 * ToBeAdded
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectToBeAdded, selectStories } from './selectors';
import { toBeAddedSaga } from './saga';
import { ToBeAddedItem } from './ToBeAddedItem';

interface Props {}

export function ToBeAdded(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: toBeAddedSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const toBeAdded = useSelector(selectToBeAdded);
  const stories = useSelector(selectStories);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();
  return (
    <>
      <Helmet>
        <title>To Be Added</title>
        <meta name="description" content="Description of ToBeAdded" />
      </Helmet>
      <Wrapper>
        <p>goooooooood</p>
        {stories?.length > 0 ? (
          <List>
            {stories.map(story => (
              <ToBeAddedItem
                key={story.sprint_code}
                name={story.sprint_name}
                status={story.status}
                active={story.active}
                time={story.date_started}
              />
            ))}
          </List>
        ) : null}
      </Wrapper>
    </>
  );
}
const Wrapper = styled.div`
  margin: 2px 0;
  font-size: 0.875rem;
`;
const List = styled.div``;
