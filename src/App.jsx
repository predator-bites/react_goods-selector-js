import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

export const goods = [
  ['Dumplings', 0],
  ['Carrot', 1],
  ['Eggs', 2],
  ['Ice cream', 3],
  ['Apple', 4],
  ['Bread', 5],
  ['Fish', 6],
  ['Honey', 7],
  ['Jam', 8],
  ['Garlic', 9],
];

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood ? `${selectedGood} is selected` : 'No goods selected'}

        {selectedGood ? (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setSelectedGood('')}
          />
        ) : (
          ''
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(([good, i]) => {
            if (good === selectedGood) {
              return (
                <tr
                  data-cy="Good"
                  className="has-background-success-light"
                  key={i}
                >
                  <td>
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={() => setSelectedGood('')}
                    >
                      -
                    </button>
                  </td>

                  <td data-cy="GoodTitle" className="is-vcentered">
                    {good}
                  </td>
                </tr>
              );
            }

            return (
              <tr data-cy="Good" key={i}>
                <td>
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={() => setSelectedGood(good)}
                  >
                    +
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {good}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
