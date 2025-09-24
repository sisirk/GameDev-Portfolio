export default class ProjectData {
  id: string;
  name: string;
  htmlDescription: string;
  iconUrl: string;      // image fallback / poster
  isWide: boolean;      // thumbnail will take 2 cols in the grid view
  isHigh: boolean;      // thumbnail will take 2 rows in the grid view
  accentColor: string;  // color of title bar

  thumbVideoUrl?: string;   // path to .mp4 (or .webm)
  thumbPosterUrl?: string;  // optional poster image for the video

  constructor(
    id: string,
    name: string,
    iconUrl: string,
    html: string,
    accentColor = "#000000",
    isHigh = false,
    isWide = false,

    opts?: {
      thumbVideoUrl?: string;
      thumbPosterUrl?: string;
    }
  ) {
    this.id = id;
    this.name = name;
    this.htmlDescription = html;
    this.iconUrl = iconUrl;
    this.isHigh = isHigh;
    this.isWide = isWide;
    this.accentColor = accentColor;

    this.thumbVideoUrl = opts?.thumbVideoUrl;
    this.thumbPosterUrl = opts?.thumbPosterUrl;
  }
}

