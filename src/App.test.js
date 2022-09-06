import { render,screen } from "@testing-library/react";
import App from "./App";
import { shallow } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

// 👇️ wrap component that uses useLocation in Router

test("renders react component", async () => {

const wrapper=shallow(<App/>)


console.log(wrapper);


  // your tests...
});
