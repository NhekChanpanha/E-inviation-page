import type { Metadata } from 'next';
import { InvitationPage } from '@/src/components/invitation-page';

export const metadata: Metadata = {
  title: 'សិរីមង្គលអាពាហ៍ពិពាហ៍ | Wedding Invitation',
  description: 'You are invited to celebrate our wedding',
};

export default function Invitation() {
  return <InvitationPage />;
}
