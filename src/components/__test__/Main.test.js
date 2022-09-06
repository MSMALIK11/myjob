
import {render,screen} from '@testing-library/react'
import Home from '../../Pages/Home';

import NavBar from '../NavBar';

describe("Testing home  component render or not",()=>{




   
it("Shold be in the document",()=>{

render(<NavBar/>)
const component=screen.getByTestId('navBar')

console.log(component)

})

it("Should have navBarWraper class",()=>{

    render(<NavBar/>)

    const elemDiv=screen.getByTestId("navBar");
expect(elemDiv.className).toBe('navBarWraper')
   

})


})