
import './App.css'
import ActionForm from './Components/ActionForm/ActionForm'
import ControlledForm from './Components/ControlledForm/ControlledForm'
import HookForm from './Components/HookForm/HookForm'
import ProductManagment from './Components/ProductManagment/ProductManagment'
import SimpleForm from './Components/SimpleForm/SimpleForm'
import GrandPa from './Components/Tree/GrandPa'
import Tree from './Components/Tree/Tree'
import UncontrolledForm from './Components/UncontrolledForm/UncontrolledForm'

function App() {

  return (
    <>
      <h2>React form</h2>
      {/* <SimpleForm></SimpleForm> */}
      {/* <ActionForm></ActionForm> */}
      {/* <ControlledForm></ControlledForm> */}
      {/* <UncontrolledForm></UncontrolledForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ProductManagment></ProductManagment> */}
      <Tree></Tree>
    </>
  )
}

export default App
