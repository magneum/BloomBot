import {
  simpleGit,
  MergeSummary,
  GitResponseError,
  MergeResult,
  MergeConflict,
} from "simple-git";
(async () => {
  simpleGit()
    .add("./*")
    .commit("first commit!")
    .addRemote("origin", "some-repo-url")
    .push(["-u", "origin", "master"], () => console.log("done"));
})();
