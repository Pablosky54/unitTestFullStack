import React from 'react';
import {render,screen} from '@testing-library/react';
import '@testing-library/jest-dom';
//import {CreatedMonsterList} from './CreatedMonsterList'
import { MonsterCardList } from "../monster-card/MonsterCardList";
import { Monster } from "../../models/interfaces/monster.interface";



jest.mock('../monster-card/MonsterCardList', () => ({
    MonsterCardList: ({ monster , handleDelete}: any) => (

      <div data-testid="monster-card">
        <div data-testid="monster-name">{monster.name}</div>
        <div data-testid="monster-attack">Attack: {monster.attack}</div>
        <div data-testid="monster-defense">Defense: {monster.defense}</div>
        <div data-testid="monster-health">Health: {monster.health}</div>
        <button
            data-testid={`delete-button-${monster.id}`}
            onClick={() => handleDelete(monster.id)}
            >
        Delete
        </button>
        </div>



    ),

}));

describe('CreatedMonsterList', ()=>{

const mockMonsters: Monster[] = [
{
  id: '1',
  name: 'Dragon',
  attack: 100,
  defense: 50,
  health: 100,

},
{
id: '2',
  name: 'Goblin',
  attack: 30,
  defense: 10,
  health: 5,
  },
  {
  id: '3',
    name: 'Wizard',
    attack: 60,
    defense: 40,
    health: 20,
    }
];

    const mockDelete = jest.fn();

        beforeEach(()=>{
            mockOnDelete.mockDelete();
        });

    it('Should render without crashing', ()=> {

    render(<CreatedMonsterList monster={mockMonsters} OnDelte={mockOnDelete}/>);
    expect(screen.getByTestId('cards-containers')).toBeInTheDocument();


    });
});
