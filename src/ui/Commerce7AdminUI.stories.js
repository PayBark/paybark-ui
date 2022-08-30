import PayBarkUI from '.';

export const Basic = () => (
  <PayBarkUI mode="light">
    <div>Application Code</div>
  </PayBarkUI>
);

Basic.story = {
  name: 'Basic'
};

export default {
  title: 'PayBarkUI',
  component: PayBarkUI,
  parameters: {
    docs: {
      description: {
        component: "import { PayBarkUI } from '@commerce7/admin-ui'"
      }
    }
  }
};
