
import {render,screen} from '@testing-library/react'
import Home from '../../Pages/Home';
import {BrowserRouter as Router} from 'react-router-dom';
import NavBar from '../NavBar';

describe("Testing home  component render or not",()=>{





it("Shold be in the document",()=>{

render(<NavBar/>)
const component=screen.getByTestId('navBar')

   expect(component).toBeInTheDocument()

})

it("Should have navBarWraper class",()=>{

    render(<NavBar/>)

})

})