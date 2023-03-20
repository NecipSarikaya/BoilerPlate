import React from 'react';
import { Button } from 'components/';
import { decrement, increment } from 'store/counter';
import { useAppDispatch, useAppSelector } from '@/store';

function Profile(): React.ReactElement {
  const counter = useAppSelector((state) => state.counter.counter);

  const dispatch = useAppDispatch();

  return (
    <div>
      <h1>Profile</h1>
      <div className="flex flex-center w-full items-center justify-center gap-2">
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            dispatch(decrement());
          }}
        >
          -
        </Button>
        <h2>{counter}</h2>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            dispatch(increment());
          }}
        >
          +
        </Button>
      </div>
    </div>
  );
}

export default Profile;
