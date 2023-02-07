import LeaveButton from '../Buttons/LeaveButton';
import AudioButton from '../Buttons/AudioButton';
import UserCount from '../Buttons/UserCount';
import PushToTalkButton from '../Buttons/PushToTalkButton'; 
import {
  useHMSActions,
  useHMSStore,
  selectIsLocalAudioEnabled,
} from '@100mslive/hms-video-react';

const Footer = ({ count }) => {
  const hmsActions = useHMSActions();
  const isLocalAudioEnabled = useHMSStore(selectIsLocalAudioEnabled);
  const unmute = () => hmsActions.setLocalAudioEnabled(true);
  const mute = () => hmsActions.setLocalAudioEnabled(false);
  return (
    <footer className='flex h-20 bg-gray-100 fixed bottom-0 space-x-4 left-0 w-full items-center justify-center'>
      <UserCount count={count} />
      <AudioButton
        active={isLocalAudioEnabled}
        onClick={() => {
          hmsActions.setLocalAudioEnabled(!isLocalAudioEnabled);
        }}
      />

      <PushToTalkButton
        onMouseDown={unmute}
        onMouseUp={mute}
        onMouseLeave={mute}
        onTouchStart={unmute}
        onTouchEnd={mute}
      />

      <LeaveButton
        onClick={() => {
          hmsActions.leave();
        }}
      />
    </footer>
  );
};

export default Footer;

