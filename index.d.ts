declare module "count-files" {
  export interface CountFilesResults {
    files: number,
    dirs: number,
    bytes: number
  }

  function CountFiles(DirectoryPath: string, Callback: (Error: Error, Results: CountFilesResults) => void): void;
  export default CountFiles;
}
