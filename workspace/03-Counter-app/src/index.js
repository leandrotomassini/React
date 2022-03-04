import { render } from "@testing-library/react";
import CounterApp from "./CounterApp";


import './index.css';

const divRoot = document.querySelector('#root');

render(<CounterApp value={8}/>, divRoot);


