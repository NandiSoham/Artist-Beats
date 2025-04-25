import { metadata } from './metadata';
import RootLayoutClient from './layout';

export { metadata };

export default function RootLayoutServer(props: { children: React.ReactNode }) {
    return <RootLayoutClient {...props} />;
} 