import {
  createAmplifyAuthAdapter,
  createStorageBrowser,
} from '@aws-amplify/ui-react-storage/browser';
import '@aws-amplify/ui-react-storage/styles.css';
import { Authenticator, Button } from '@aws-amplify/ui-react';
import './S3BrowserComponent.css';

const { StorageBrowser } = createStorageBrowser({
  config: createAmplifyAuthAdapter(),
});

/**
 * S3BrowserComponent is a self-contained storage browser with authentication.
 * The consumer app must call Amplify.configure(amplify_outputs) before rendering this component.
 */
export function S3BrowserComponent() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <>
          <div className="s3-browser-header">
            <h1>{`Hello ${user?.username}`}</h1>
            <Button onClick={signOut}>Sign out</Button>
          </div>
          <StorageBrowser />
        </>
      )}
    </Authenticator>
  );
}
