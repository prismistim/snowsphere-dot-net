export interface Response {
  weeklytrackchart: Weeklytrackchart;
}

export interface Weeklytrackchart {
  track:   Track[];
  "@attr": WeeklytrackchartAttr;
}

export interface WeeklytrackchartAttr {
  from: string;
  user: string;
  to:   string;
}

export interface Track {
  artist:    Artist;
  image:     Image[];
  mbid:      string;
  url:       string;
  name:      string;
  "@attr":   TrackAttr;
  playcount: string;
}

export interface TrackAttr {
  rank: string;
}

export interface Artist {
  mbid:    string;
  "#text": string;
}

export interface Image {
  size:    Size;
  "#text": string;
}

export enum Size {
  Large = "large",
  Medium = "medium",
  Small = "small",
}