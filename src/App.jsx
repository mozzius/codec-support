const videoTypes = ["webm", "ogg", "mp4", "x-matroska"];
const codecs = [
  "should-not-be-supported",
  "vp9",
  "vp9.0",
  "vp8",
  "vp8.0",
  "avc1",
  "av1",
  "h265",
  "h.265",
  "h264",
  "h.264",
  "opus",
  "pcm",
  "aac",
  "mpeg",
  "mp4a",
];

// browser name + version
const browser =
  navigator.userAgent
    .match(/(chrome|firefox|safari|edge|opera)\/(\d+)/i)
    ?.slice(1)
    .join(" ") || "unknown";

function App() {
  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="text-2xl font-bold my-4">
        MediaRecorder codec support matrix
      </h1>
      <p className="mb-4">
        Browser: <span>{browser}</span>
      </p>
      <table className="table-auto w-full">
        <thead>
          <tr className="border-b font-bold">
            <th className="text-left">Codec</th>
            {videoTypes.map((videoType) => (
              <th key={videoType}>{videoType}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {codecs.map((codec) => (
            <tr key={codec} className="border-b">
              <td>{codec}</td>
              {videoTypes.map((videoType) => (
                <td key={videoType} className="text-center">
                  {MediaRecorder.isTypeSupported(
                    `video/${videoType};codecs=${codec}`
                  )
                    ? "✅"
                    : "❌"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
