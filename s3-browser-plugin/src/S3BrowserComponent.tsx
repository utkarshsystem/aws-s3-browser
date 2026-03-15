import {
  createManagedAuthAdapter,
  createStorageBrowser,
} from '@aws-amplify/ui-react-storage/browser';
import '@aws-amplify/ui-react-storage/styles.css';
import { fetchAuthSession } from 'aws-amplify/auth';
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
            const { credentials } = await fetchAuthSession();
            return { credentials: credentials! };
          },
          region,
          accountId,
        }),
      }),
    [region, accountId]
  );

  return (
    <div className="s3-browser-header">
      <StorageBrowser />
    </div>
  );
}
