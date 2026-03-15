import {
  createManagedAuthAdapter,
  createStorageBrowser,
} from '@aws-amplify/ui-react-storage/browser';
import '@aws-amplify/ui-react-storage/styles.css';
import { fetchAuthSession } from 'aws-amplify/auth';
import { Hub } from 'aws-amplify/utils';
import { useMemo } from 'react';
import './S3BrowserComponent.css';

export interface S3BrowserComponentProps {
  region: string;
  accountId: string;
}

/**
 * S3BrowserComponent renders the storage browser using Identity Pool credentials
 * fetched automatically via fetchAuthSession — no sign-in UI required.
 * The consumer app must call Amplify.configure(amplify_outputs) before rendering this component.
 */
export function S3BrowserComponent({ region, accountId }: S3BrowserComponentProps) {
  const { StorageBrowser } = useMemo(
    () =>
      createStorageBrowser({
        config: createManagedAuthAdapter({
          credentialsProvider: async () => {
            const { credentials } = await fetchAuthSession({ forceRefresh: true });
            if (
              !credentials?.accessKeyId ||
              !credentials?.secretAccessKey ||
              !credentials?.sessionToken ||
              !credentials?.expiration
            ) {
              throw new Error('Unable to retrieve valid AWS credentials from session.');
            }
            return {
              credentials: {
                accessKeyId: credentials.accessKeyId,
                secretAccessKey: credentials.secretAccessKey,
                sessionToken: credentials.sessionToken,
                expiration: credentials.expiration,
              },
            };
          },
          region,
          accountId,
          registerAuthListener: (onStateChange) => {
            const unsubscribe = Hub.listen('auth', onStateChange);
            return unsubscribe;
          },
        }),
      }),
    [region, accountId]
  );

  return (
    <div className="s3-browser-container">
      <StorageBrowser />
    </div>
  );
}
