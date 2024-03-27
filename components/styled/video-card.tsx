import { cn } from "@/lib/utils";
import {
  MediaController,
  MediaControlBar,
  MediaTimeRange,
  MediaTimeDisplay,
  MediaVolumeRange,
  MediaPlayButton,
  MediaSeekBackwardButton,
  MediaSeekForwardButton,
  MediaMuteButton,
  MediaFullscreenButton,
} from "media-chrome/dist/react";

export default function VideoCard({ video, title, thumbnail, className }: any) {
  return (
    <div className={cn("aspect-video", className )}>
      <MediaController>
        <video
          slot="media"
          src={video}
          // poster="/images/toadlabstecnologyinclogo.png"
          preload="auto"
          muted
          crossOrigin=""
          // autoPlay
        />
        <MediaControlBar>
          <MediaPlayButton></MediaPlayButton>
          <MediaFullscreenButton></MediaFullscreenButton>
          {/* <MediaSeekBackwardButton></MediaSeekBackwardButton> */}
          {/* <MediaSeekForwardButton></MediaSeekForwardButton> */}
          {/* <MediaTimeRange></MediaTimeRange> */}
          {/* <MediaTimeDisplay showDuration></MediaTimeDisplay> */}
          {/* <MediaMuteButton></MediaMuteButton> */}
          {/* <MediaVolumeRange></MediaVolumeRange> */}
        </MediaControlBar>
      </MediaController>
    </div>
  );
}
