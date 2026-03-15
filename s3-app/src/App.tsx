import { S3BrowserComponent } from 'vcp-s3-browser-ui';
import config from '../amplify_outputs.json';

function App() {
  return (
    <S3BrowserComponent
      region={config.storage.aws_region}
      accountId={import.meta.env.VITE_AWS_ACCOUNT_ID}
    />
  );
}

export default App;
