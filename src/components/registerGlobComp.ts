import type { App } from 'vue'
import { Button } from './Button'

import {
  Table,
  Drawer,
  Collapse,
  CollapsePanel,
  Row,
  Col,
  Tree,
  Card,
  Form,
  FormItem,
  Button as AButton,
  InputPassword,
  Input,
  Layout,
  RadioGroup,
  RadioButton,
  Checkbox,
  Textarea,
  Switch,
  Tag,
} from 'ant-design-vue'
const antComponents = [
  Input,
  Table,
  Drawer,
  Collapse,
  CollapsePanel,
  Row,
  Col,
  Tree,
  Card,
  Form,
  FormItem,
  AButton,
  InputPassword,
  Layout,
  RadioGroup,
  RadioButton,
  Checkbox,
  Switch,
  Textarea,
  Tag,
]
export function registerGlobComp(app: App) {
  antComponents.forEach((component) => app.component(component.name, component))
  app.use(Button)
}
