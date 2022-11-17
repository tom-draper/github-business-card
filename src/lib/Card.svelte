<script lang="ts">
  function languageToTag(language: string) {
    return language
      .replace(" ", "-")
      .replace("+", "Plus")
      .replace("#", "Sharp");
  }
  export let data: any;
</script>

<div id="card">
  <div class="card-content">
    <div class="name-profile">
      <div class="profile-image-container">
        <img class="profile-image" src={data.user.avatar_url} alt="" />
      </div>
      <div class="name-url">
        <div class="name">
          {data.user.name}
        </div>
        <div class="github-url">
          <span class="faint">github.com/</span><span style="font-weight: 600"
            >{data.user.login}</span
          >
        </div>
        <div class="stats">
          <div class="stars">
            <svg
              aria-hidden="true"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              data-view-component="true"
              class="octicon octicon-star mr-2"
            >
              <path
                fill-rule="evenodd"
                d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
              />
            </svg>
            <div class="stars-value">
              {data.stats.stars}
            </div>
          </div>
          <div class="forks">
            <svg
              aria-hidden="true"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              data-view-component="true"
              class="octicon octicon-repo-forked mr-2"
            >
              <path
                fill-rule="evenodd"
                d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
              />
            </svg>
            <div class="fork-value">
              {data.stats.forks}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="details">
      <div class="location-date">
        <div class="location">
          <svg
            class="octicon octicon-location"
            viewBox="0 0 16 16"
            version="1.1"
            width="12"
            height="12"
            aria-hidden="true"
            ><path
              fill-rule="evenodd"
              d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"
            /></svg
          >{data.user.location}
        </div>
      </div>

      <div class="repo-stats">
        <div class="repo-count">
          {data.user.public_repos} repos
        </div>
        <div class="lines">
          {data.stats.lines.toLocaleString("en-US")} lines
        </div>
      </div>
    </div>
    <div class="since">
      Since {new Date(data.user.created_at).toLocaleDateString("en-us", {
        year: "numeric",
        month: "long",
      })}
    </div>
  </div>
  <div class="languages">
    {#each data.stats.languages as language, _}
      <div
        class="language {languageToTag(language[0])}"
        style="flex: {language[1]};"
      >
        <div class="language-text">{language[0]}</div>
      </div>
    {/each}
  </div>
</div>

<style>
  #card {
    width: 500px;
    aspect-ratio: 3.5/2;
    background: white;
    color: black;
    text-align: left;
    border-radius: 4px;
    margin: 0 0 100px;
    display: grid;
    position: relative;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    overflow: hidden;
  }
  .card-content {
    margin: 35px 20px 20px 40px;
    position: relative;
  }
  .name-profile {
    display: flex;
    align-items: center;
  }
  .name {
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 10px;
  }
  .profile-image {
    width: 120px;
    border-radius: 60px;
    margin-right: 20px;
  }
  .github-url {
    font-size: 18px;
  }
  .faint {
    opacity: 0.5;
  }
  .stats {
    color: #56606a !important;
    display: flex;
    margin-top: 10px;
  }
  .forks,
  .stars {
    display: flex;
    margin-right: 10px;
  }
  svg {
    margin: auto 3px auto auto;
  }

  .languages {
    position: absolute;
    display: flex;
    width: 100%;
    height: 14px;
    bottom: 0;
  }

  .language {
    position: relative;
  }

  .language-text {
    position: absolute;
    visibility: hidden;
    bottom: 10px;
    font-size: 0.6em;
    opacity: 0.5;
    left: 2px;
  }
  .language:hover ~ .language-text {
    visibility: visible;
  }

  .details {
    margin-top: 5px;
    font-size: 0.9em;
    width: 35%;
  }

  .location-date,
  .repo-stats {
    display: flex;
  }

  .since {
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: 0.8em;
    opacity: 0.5;
  }

  .repo-count {
    margin-right: 1ch;
  }

  .OneC-Enterprise {
    background: #814ccc;
  }

  .Two-Dimensional-Array {
    background: #38761d;
  }

  .FourD {
    background: #004289;
  }

  .ABAP {
    background: #e8274b;
  }

  .ABAP-CDS {
    background: #555e25;
  }

  .ActionScript {
    background: #882b0f;
  }

  .Ada {
    background: #02f88c;
  }

  .Adblock-Filter-List {
    background: #800000;
  }

  .Adobe-Font-Metrics {
    background: #fa0f00;
  }

  .Agda {
    background: #315665;
  }

  .AGS-Script {
    background: #b9d9ff;
  }

  .AIDL {
    background: #34eb6b;
  }

  .AL {
    background: #3aa2b5;
  }

  .Alloy {
    background: #64c800;
  }

  .Alpine-Abuild {
    background: #0d597f;
  }

  .Altium-Designer {
    background: #a89663;
  }

  .AMPL {
    background: #e6efbb;
  }

  .AngelScript {
    background: #c7d7dc;
  }

  .Ant-Build-System {
    background: #a9157e;
  }

  .Antlers {
    background: #ff269e;
  }

  .ANTLR {
    background: #9dc3ff;
  }

  .ApacheConf {
    background: #d12127;
  }

  .Apex {
    background: #1797c0;
  }

  .API-Blueprint {
    background: #2acca8;
  }

  .APL {
    background: #5a8164;
  }

  .Apollo-Guidance-Computer {
    background: #0b3d91;
  }

  .AppleScript {
    background: #101f1f;
  }

  .Arc {
    background: #aa2afe;
  }

  .AsciiDoc {
    background: #73a0c5;
  }

  .ASP.NET {
    background: #9400ff;
  }

  .AspectJ {
    background: #a957b0;
  }

  .Assembly {
    background: #6e4c13;
  }

  .Astro {
    background: #ff5a03;
  }

  .Asymptote {
    background: #ff0000;
  }

  .ATS {
    background: #1ac620;
  }

  .Augeas {
    background: #9cc134;
  }

  .AutoHotkey {
    background: #6594b9;
  }

  .AutoIt {
    background: #1c3552;
  }

  .Avro-IDL {
    background: #0040ff;
  }

  .Awk {
    background: #c30e9b;
  }

  .Ballerina {
    background: #ff5000;
  }

  .BASIC {
    background: #ff0000;
  }

  .Batchfile {
    background: #c1f12e;
  }

  .Beef {
    background: #a52f4e;
  }

  .Berry {
    background: #15a13c;
  }

  .BibTeX {
    background: #778899;
  }

  .Bicep {
    background: #519aba;
  }

  .Bikeshed {
    background: #5562ac;
  }

  .Bison {
    background: #6a463f;
  }

  .BitBake {
    background: #00bce4;
  }

  .Blade {
    background: #f7523f;
  }

  .BlitzBasic {
    background: #00ffae;
  }

  .BlitzMax {
    background: #cd6400;
  }

  .Bluespec {
    background: #12223c;
  }

  .Boo {
    background: #d4bec1;
  }

  .Boogie {
    background: #c80fa0;
  }

  .Brainfuck {
    background: #2f2530;
  }

  .BrighterScript {
    background: #66aabb;
  }

  .Brightscript {
    background: #662d91;
  }

  .Browserslist {
    background: #ffd539;
  }

  .C {
    background: #555555;
  }

  .C-Sharp {
    background: #178600;
  }

  .C-Plus-Plus {
    background: #f34b7d;
  }

  .Cabal-Config {
    background: #483465;
  }

  .Cadence {
    background: #00ef8b;
  }

  .Cairo {
    background: #ff4a48;
  }

  .CameLIGO {
    background: #3be133;
  }

  .CAP-CDS {
    background: #0092d1;
  }

  .Capn-Proto {
    background: #c42727;
  }

  .Ceylon {
    background: #dfa535;
  }

  .Chapel {
    background: #8dc63f;
  }

  .ChucK {
    background: #3f8000;
  }

  .Cirru {
    background: #ccccff;
  }

  .Clarion {
    background: #db901e;
  }

  .Clarity {
    background: #5546ff;
  }

  .Classic-ASP {
    background: #6a40fd;
  }

  .Clean {
    background: #3f85af;
  }

  .Click {
    background: #e4e6f3;
  }

  .CLIPS {
    background: #00a300;
  }

  .Clojure {
    background: #db5855;
  }

  .Closure-Templates {
    background: #0d948f;
  }

  .Cloud-Firestore-Security-Rules {
    background: #ffa000;
  }

  .CMake {
    background: #da3434;
  }

  .CodeQL {
    background: #140f46;
  }

  .CoffeeScript {
    background: #244776;
  }

  .ColdFusion {
    background: #ed2cd6;
  }

  .ColdFusion-CFC {
    background: #ed2cd6;
  }

  .COLLADA {
    background: #f1a42b;
  }

  .Common-Lisp {
    background: #3fb68b;
  }

  .Common-Workflow-Language {
    background: #b5314c;
  }

  .Component-Pascal {
    background: #b0ce4e;
  }

  .Coq {
    background: #d0b68c;
  }

  .Crystal {
    background: #000100;
  }

  .CSON {
    background: #244776;
  }

  .Csound {
    background: #1a1a1a;
  }

  .Csound-Document {
    background: #1a1a1a;
  }

  .Csound-Score {
    background: #1a1a1a;
  }

  .CSS {
    background: #563d7c;
  }

  .CSV {
    background: #237346;
  }

  .Cuda {
    background: #3a4e3a;
  }

  .CUE {
    background: #5886e1;
  }

  .Curry {
    background: #531242;
  }

  .CWeb {
    background: #00007a;
  }

  .Cypher {
    background: #34c0eb;
  }

  .Cython {
    background: #fedf5b;
  }

  .D {
    background: #ba595e;
  }

  .Dafny {
    background: #ffec25;
  }

  .Darcs-Patch {
    background: #8eff23;
  }

  .Dart {
    background: #00b4ab;
  }

  .DataWeave {
    background: #003a52;
  }

  .Debian-Package-Control-File {
    background: #d70751;
  }

  .DenizenScript {
    background: #fbee96;
  }

  .Dhall {
    background: #dfafff;
  }

  .DirectX-3D-File {
    background: #aace60;
  }

  .DM {
    background: #447265;
  }

  .Dockerfile {
    background: #384d54;
  }

  .Dogescript {
    background: #cca760;
  }

  .Dylan {
    background: #6c616e;
  }

  .E {
    background: #ccce35;
  }

  .Earthly {
    background: #2af0ff;
  }

  .Easybuild {
    background: #069406;
  }

  .eC {
    background: #913960;
  }

  .Ecere-Projects {
    background: #913960;
  }

  .ECL {
    background: #8a1267;
  }

  .ECLiPSe {
    background: #001d9d;
  }

  .Ecmarkup {
    background: #eb8131;
  }

  .EditorConfig {
    background: #fff1f2;
  }

  .Eiffel {
    background: #4d6977;
  }

  .EJS {
    background: #a91e50;
  }

  .Elixir {
    background: #6e4a7e;
  }

  .Elm {
    background: #60b5cc;
  }

  .Elvish {
    background: #55bb55;
  }

  .Emacs-Lisp {
    background: #c065db;
  }

  .EmberScript {
    background: #fff4f3;
  }

  .EQ {
    background: #a78649;
  }

  .Erlang {
    background: #b83998;
  }

  .Euphoria {
    background: #ff790b;
  }

  .F-Sharp {
    background: #b845fc;
  }

  .F-Star {
    background: #572e30;
  }

  .Factor {
    background: #636746;
  }

  .Fancy {
    background: #7b9db4;
  }

  .Fantom {
    background: #14253c;
  }

  .Faust {
    background: #c37240;
  }

  .Fennel {
    background: #fff3d7;
  }

  .FIGlet-Font {
    background: #ffddbb;
  }

  .Filebench-WML {
    background: #f6b900;
  }

  .fish {
    background: #4aae47;
  }

  .Fluent {
    background: #ffcc33;
  }

  .FLUX {
    background: #88ccff;
  }

  .Forth {
    background: #341708;
  }

  .Fortran {
    background: #4d41b1;
  }

  .Fortran-Free-Form {
    background: #4d41b1;
  }

  .FreeBasic {
    background: #867db1;
  }

  .FreeMarker {
    background: #0050b2;
  }

  .Frege {
    background: #00cafe;
  }

  .Futhark {
    background: #5f021f;
  }

  .G-code {
    background: #d08cf2;
  }

  .Game-Maker-Language {
    background: #71b417;
  }

  .GAML {
    background: #ffc766;
  }

  .GAMS {
    background: #f49a22;
  }

  .GAP {
    background: #0000cc;
  }

  .GCC-Machine-Description {
    background: #ffcfab;
  }

  .GDScript {
    background: #355570;
  }

  .GEDCOM {
    background: #003058;
  }

  .Gemfile.lock {
    background: #701516;
  }

  .Gemini {
    background: #ff6900;
  }

  .Genero {
    background: #63408e;
  }

  .Genero-Forms {
    background: #d8df39;
  }

  .Genie {
    background: #fb855d;
  }

  .Genshi {
    background: #951531;
  }

  .Gentoo-Ebuild {
    background: #9400ff;
  }

  .Gentoo-Eclass {
    background: #9400ff;
  }

  .Gerber-Image {
    background: #d20b00;
  }

  .Gherkin {
    background: #5b2063;
  }

  .Git-Attributes {
    background: #f44d27;
  }

  .Git-Config {
    background: #f44d27;
  }

  .Git-Revision-List {
    background: #f44d27;
  }

  .Gleam {
    background: #ffaff3;
  }

  .GLSL {
    background: #5686a5;
  }

  .Glyph {
    background: #c1ac7f;
  }

  .Gnuplot {
    background: #f0a9f0;
  }

  .Go {
    background: #00add8;
  }

  .Go-Checksums {
    background: #00add8;
  }

  .Go-Module {
    background: #00add8;
  }

  .Golo {
    background: #88562a;
  }

  .Gosu {
    background: #82937f;
  }

  .Grace {
    background: #615f8b;
  }

  .Gradle {
    background: #02303a;
  }

  .Grammatical-Framework {
    background: #ff0000;
  }

  .GraphQL {
    background: #e10098;
  }

  .Graphviz-DOT {
    background: #2596be;
  }

  .Groovy {
    background: #4298b8;
  }

  .Groovy-Server-Pages {
    background: #4298b8;
  }

  .GSC {
    background: #ff6800;
  }

  .Hack {
    background: #878787;
  }

  .Haml {
    background: #ece2a9;
  }

  .Handlebars {
    background: #f7931e;
  }

  .HAProxy {
    background: #106da9;
  }

  .Harbour {
    background: #0e60e3;
  }

  .Haskell {
    background: #5e5086;
  }

  .Haxe {
    background: #df7900;
  }

  .HiveQL {
    background: #dce200;
  }

  .HLSL {
    background: #aace60;
  }

  .HOCON {
    background: #9ff8ee;
  }

  .HolyC {
    background: #ffefaf;
  }

  .hoon {
    background: #00b171;
  }

  .HTML {
    background: #e34c26;
  }

  .HTML-ECR {
    background: #2e1052;
  }

  .HTML-EEX {
    background: #6e4a7e;
  }

  .HTML-ERB {
    background: #701516;
  }

  .HTML-PHP {
    background: #4f5d95;
  }

  .HTML-Razor {
    background: #512be4;
  }

  .HTTP {
    background: #005c9c;
  }

  .HXML {
    background: #f68712;
  }

  .Hy {
    background: #7790b2;
  }

  .IDL {
    background: #a3522f;
  }

  .Idris {
    background: #b30000;
  }

  .Ignore-List {
    background: #000000;
  }

  .IGOR-Pro {
    background: #0000cc;
  }

  .ImageJ-Macro {
    background: #99aaff;
  }

  .Imba {
    background: #16cec6;
  }

  .INI {
    background: #d1dbe0;
  }

  .Inno-Setup {
    background: #264b99;
  }

  .Io {
    background: #a9188d;
  }

  .Ioke {
    background: #078193;
  }

  .Isabelle {
    background: #fefe00;
  }

  .Isabelle-ROOT {
    background: #fefe00;
  }

  .J {
    background: #9eedff;
  }

  .Janet {
    background: #0886a5;
  }

  .JAR-Manifest {
    background: #b07219;
  }

  .Jasmin {
    background: #d03600;
  }

  .Java {
    background: #b07219;
  }

  .Java-Properties {
    background: #2a6277;
  }

  .Java-Server-Pages {
    background: #2a6277;
  }

  .JavaScript {
    background: #f1e05a;
  }

  .JavaScript-ERB {
    background: #f1e05a;
  }

  .Jest-Snapshot {
    background: #15c213;
  }

  .JetBrains-MPS {
    background: #21d789;
  }

  .JFlex {
    background: #dbca00;
  }

  .Jinja {
    background: #a52a22;
  }

  .Jison {
    background: #56b3cb;
  }

  .Jison-Lex {
    background: #56b3cb;
  }

  .Jolie {
    background: #843179;
  }

  .jq {
    background: #c7254e;
  }

  .JSON {
    background: #292929;
  }

  .JSON-with-Comments {
    background: #292929;
  }

  .JSON5 {
    background: #267cb9;
  }

  .JSONiq {
    background: #40d47e;
  }

  .JSONLD {
    background: #0c479c;
  }

  .Jsonnet {
    background: #0064bd;
  }

  .Julia {
    background: #a270ba;
  }

  .Jupyter-Notebook {
    background: #da5b0b;
  }

  .just {
    background: #384d54;
  }

  .Kaitai-Struct {
    background: #773b37;
  }

  .KakouneScript {
    background: #6f8042;
  }

  .KiCad-Layout {
    background: #2f4aab;
  }

  .KiCad-Legacy-Layout {
    background: #2f4aab;
  }

  .KiCad-Schematic {
    background: #2f4aab;
  }

  .Kotlin {
    background: #a97bff;
  }

  .KRL {
    background: #28430a;
  }

  .kvlang {
    background: #1da6e0;
  }

  .LabVIEW {
    background: #fede06;
  }

  .Lark {
    background: #2980b9;
  }

  .Lasso {
    background: #999999;
  }

  .Latte {
    background: #f2a542;
  }

  .Less {
    background: #1d365d;
  }

  .Lex {
    background: #dbca00;
  }

  .LFE {
    background: #4c3023;
  }

  .LigoLANG {
    background: #0e74ff;
  }

  .LilyPond {
    background: #9ccc7c;
  }

  .Liquid {
    background: #67b8de;
  }

  .Literate-Agda {
    background: #315665;
  }

  .Literate-CoffeeScript {
    background: #244776;
  }

  .Literate-Haskell {
    background: #5e5086;
  }

  .LiveScript {
    background: #499886;
  }

  .LLVM {
    background: #185619;
  }

  .Logtalk {
    background: #295b9a;
  }

  .LOLCODE {
    background: #cc9900;
  }

  .LookML {
    background: #652b81;
  }

  .LSL {
    background: #3d9970;
  }

  .Lua {
    background: #000080;
  }

  .Macaulay2 {
    background: #d8ffff;
  }

  .Makefile {
    background: #427819;
  }

  .Mako {
    background: #7e858d;
  }

  .Markdown {
    background: #083fa1;
  }

  .Marko {
    background: #42bff2;
  }

  .Mask {
    background: #f97732;
  }

  .Mathematica {
    background: #dd1100;
  }

  .MATLAB {
    background: #e16737;
  }

  .Max {
    background: #c4a79c;
  }

  .MAXScript {
    background: #00a6a6;
  }

  .mcfunction {
    background: #e22837;
  }

  .Mercury {
    background: #ff2b2b;
  }

  .Mermaid {
    background: #ff3670;
  }

  .Meson {
    background: #007800;
  }

  .Metal {
    background: #8f14e9;
  }

  .MiniYAML {
    background: #ff1111;
  }

  .Mint {
    background: #02b046;
  }

  .Mirah {
    background: #c7a938;
  }

  .mIRC-Script {
    background: #3d57c3;
  }

  .MLIR {
    background: #5ec8db;
  }

  .Modelica {
    background: #de1d31;
  }

  .Modula-2 {
    background: #10253f;
  }

  .Modula-3 {
    background: #223388;
  }

  .Monkey-C {
    background: #8d6747;
  }

  .MoonScript {
    background: #ff4585;
  }

  .Motoko {
    background: #fbb03b;
  }

  .Motorola-68K-Assembly {
    background: #005daa;
  }

  .Move {
    background: #4a137a;
  }

  .MQL4 {
    background: #62a8d6;
  }

  .MQL5 {
    background: #4a76b8;
  }

  .MTML {
    background: #b7e1f4;
  }

  .mupad {
    background: #244963;
  }

  .Mustache {
    background: #724b3b;
  }

  .nanorc {
    background: #2d004d;
  }

  .Nasal {
    background: #1d2c4e;
  }

  .NCL {
    background: #28431f;
  }

  .Nearley {
    background: #990000;
  }

  .Nemerle {
    background: #3d3c6e;
  }

  .nesC {
    background: #94b0c7;
  }

  .NetLinx {
    background: #0aa0ff;
  }

  .NetLinx-ERB {
    background: #747faa;
  }

  .NetLogo {
    background: #ff6375;
  }

  .NewLisp {
    background: #87aed7;
  }

  .Nextflow {
    background: #3ac486;
  }

  .Nginx {
    background: #009639;
  }

  .Nim {
    background: #ffc200;
  }

  .Nit {
    background: #009917;
  }

  .Nix {
    background: #7e7eff;
  }

  .NPM-Config {
    background: #cb3837;
  }

  .Nu {
    background: #c9df40;
  }

  .NumPy {
    background: #9c8af9;
  }

  .Nunjucks {
    background: #3d8137;
  }

  .NWScript {
    background: #111522;
  }

  .OASv2-json {
    background: #85ea2d;
  }

  .OASv2-yaml {
    background: #85ea2d;
  }

  .OASv3-json {
    background: #85ea2d;
  }

  .OASv3-yaml {
    background: #85ea2d;
  }

  .Objective-C {
    background: #438eff;
  }

  .Objective-C-Plus-Plus {
    background: #6866fb;
  }

  .Objective-J {
    background: #ff0c5a;
  }

  .ObjectScript {
    background: #424893;
  }

  .OCaml {
    background: #3be133;
  }

  .Odin {
    background: #60affe;
  }

  .Omgrofl {
    background: #cabbff;
  }

  .ooc {
    background: #b0b77e;
  }

  .Opal {
    background: #f7ede0;
  }

  .Open-Policy-Agent {
    background: #7d9199;
  }

  .OpenAPI-Specification-v2 {
    background: #85ea2d;
  }

  .OpenAPI-Specification-v3 {
    background: #85ea2d;
  }

  .OpenCL {
    background: #ed2e2d;
  }

  .OpenEdge-ABL {
    background: #5ce600;
  }

  .OpenQASM {
    background: #aa70ff;
  }

  .OpenSCAD {
    background: #e5cd45;
  }

  .Option-List {
    background: #476732;
  }

  .Org {
    background: #77aa99;
  }

  .Oxygene {
    background: #cdd0e3;
  }

  .Oz {
    background: #fab738;
  }

  .P4 {
    background: #7055b5;
  }

  .Pan {
    background: #cc0000;
  }

  .Papyrus {
    background: #6600cc;
  }

  .Parrot {
    background: #f3ca0a;
  }

  .Pascal {
    background: #e3f171;
  }

  .Pawn {
    background: #dbb284;
  }

  .PDDL {
    background: #0d00ff;
  }

  .PEG.js {
    background: #234d6b;
  }

  .Pep8 {
    background: #c76f5b;
  }

  .Perl {
    background: #0298c3;
  }

  .PHP {
    background: #4f5d95;
  }

  .PicoLisp {
    background: #6067af;
  }

  .PigLatin {
    background: #fcd7de;
  }

  .Pike {
    background: #005390;
  }

  .PLpgSQL {
    background: #336790;
  }

  .PLSQL {
    background: #dad8d8;
  }

  .PogoScript {
    background: #d80074;
  }

  .Polar {
    background: #ae81ff;
  }

  .Portugol {
    background: #f8bd00;
  }

  .PostCSS {
    background: #dc3a0c;
  }

  .PostScript {
    background: #da291c;
  }

  .POV-Ray-SDL {
    background: #6bac65;
  }

  .PowerBuilder {
    background: #8f0f8d;
  }

  .PowerShell {
    background: #012456;
  }

  .Prisma {
    background: #0c344b;
  }

  .Processing {
    background: #0096d8;
  }

  .Procfile {
    background: #3b2f63;
  }

  .Prolog {
    background: #74283c;
  }

  .Promela {
    background: #de0000;
  }

  .Propeller-Spin {
    background: #7fa2a7;
  }

  .Pug {
    background: #a86454;
  }

  .Puppet {
    background: #302b6d;
  }

  .PureBasic {
    background: #5a6986;
  }

  .PureScript {
    background: #1d222d;
  }

  .Python {
    background: #3572a5;
  }

  .Python-console {
    background: #3572a5;
  }

  .Python-traceback {
    background: #3572a5;
  }

  .q {
    background: #0040cd;
  }

  .Q-Sharp {
    background: #fed659;
  }

  .QML {
    background: #44a51c;
  }

  .Qt-Script {
    background: #00b841;
  }

  .Quake {
    background: #882233;
  }

  .R {
    background: #198ce7;
  }

  .Racket {
    background: #3c5caa;
  }

  .Ragel {
    background: #9d5200;
  }

  .Raku {
    background: #0000fb;
  }

  .RAML {
    background: #77d9fb;
  }

  .Rascal {
    background: #fffaa0;
  }

  .RDoc {
    background: #701516;
  }

  .Reason {
    background: #ff5847;
  }

  .ReasonLIGO {
    background: #ff5847;
  }

  .Rebol {
    background: #358a5b;
  }

  .Record-Jar {
    background: #0673ba;
  }

  .Red {
    background: #f50000;
  }

  .Regular-Expression {
    background: #009a00;
  }

  .RenPy {
    background: #ff7f7f;
  }

  .ReScript {
    background: #ed5051;
  }

  .reStructuredText {
    background: #141414;
  }

  .REXX {
    background: #d90e09;
  }

  .Ring {
    background: #2d54cb;
  }

  .Riot {
    background: #a71e49;
  }

  .RMarkdown {
    background: #198ce7;
  }

  .RobotFramework {
    background: #00c0b5;
  }

  .Roff {
    background: #ecdebe;
  }

  .Roff-Manpage {
    background: #ecdebe;
  }

  .Rouge {
    background: #cc0088;
  }

  .RouterOS-Script {
    background: #de3941;
  }

  .RPGLE {
    background: #2bde21;
  }

  .Ruby {
    background: #701516;
  }

  .RUNOFF {
    background: #665a4e;
  }

  .Rust {
    background: #dea584;
  }

  .SaltStack {
    background: #646464;
  }

  .SAS {
    background: #b34936;
  }

  .Sass {
    background: #a53b70;
  }

  .Scala {
    background: #c22d40;
  }

  .Scaml {
    background: #bd181a;
  }

  .Scenic {
    background: #fdc700;
  }

  .Scheme {
    background: #1e4aec;
  }

  .Scilab {
    background: #ca0f21;
  }

  .SCSS {
    background: #c6538c;
  }

  .sed {
    background: #64b970;
  }

  .Self {
    background: #0579aa;
  }

  .ShaderLab {
    background: #222c37;
  }

  .Shell {
    background: #89e051;
  }

  .ShellCheck-Config {
    background: #cecfcb;
  }

  .Shen {
    background: #120f14;
  }

  .Simple-File-Verification {
    background: #c9bfed;
  }

  .Singularity {
    background: #64e6ad;
  }

  .Slash {
    background: #007eff;
  }

  .Slice {
    background: #003fa2;
  }

  .Slim {
    background: #2b2b2b;
  }

  .Smalltalk {
    background: #596706;
  }

  .Smarty {
    background: #f0c040;
  }

  .Smithy {
    background: #c44536;
  }

  .SmPL {
    background: #c94949;
  }

  .Solidity {
    background: #aa6746;
  }

  .SourcePawn {
    background: #f69e1d;
  }

  .SPARQL {
    background: #0c4597;
  }

  .SQF {
    background: #3f3f3f;
  }

  .SQL {
    background: #e38c00;
  }

  .SQLPL {
    background: #e38c00;
  }

  .Squirrel {
    background: #800000;
  }

  .SRecode-Template {
    background: #348a34;
  }

  .Stan {
    background: #b2011d;
  }

  .Standard-ML {
    background: #dc566d;
  }

  .Starlark {
    background: #76d275;
  }

  .Stata {
    background: #1a5f91;
  }

  .STL {
    background: #373b5e;
  }

  .StringTemplate {
    background: #3fb34f;
  }

  .Stylus {
    background: #ff6347;
  }

  .SubRip-Text {
    background: #9e0101;
  }

  .SugarSS {
    background: #2fcc9f;
  }

  .SuperCollider {
    background: #46390b;
  }

  .Svelte {
    background: #ff3e00;
  }

  .SVG {
    background: #ff9900;
  }

  .Swift {
    background: #f05138;
  }

  .SystemVerilog {
    background: #dae1c2;
  }

  .Talon {
    background: #333333;
  }

  .Tcl {
    background: #e4cc98;
  }

  .Terra {
    background: #00004c;
  }

  .TeX {
    background: #3d6117;
  }

  .Textile {
    background: #ffe7ac;
  }

  .TextMate-Properties {
    background: #df66e4;
  }

  .Thrift {
    background: #d12127;
  }

  .TI-Program {
    background: #a0aa87;
  }

  .TLA {
    background: #4b0079;
  }

  .TOML {
    background: #9c4221;
  }

  .TSQL {
    background: #e38c00;
  }

  .TSV {
    background: #237346;
  }

  .TSX {
    background: #3178c6;
  }

  .Turing {
    background: #cf142b;
  }

  .Twig {
    background: #c1d026;
  }

  .TXL {
    background: #0178b8;
  }

  .TypeScript {
    background: #3178c6;
  }

  .Unified-Parallel-C {
    background: #4e3617;
  }

  .Unity3D-Asset {
    background: #222c37;
  }

  .Uno {
    background: #9933cc;
  }

  .UnrealScript {
    background: #a54c4d;
  }

  .UrWeb {
    background: #ccccee;
  }

  .V {
    background: #4f87c4;
  }

  .Vala {
    background: #a56de2;
  }

  .Valve-Data-Format {
    background: #f26025;
  }

  .VBA {
    background: #867db1;
  }

  .VBScript {
    background: #15dcdc;
  }

  .VCL {
    background: #148aa8;
  }

  .Velocity-Template-Language {
    background: #507cff;
  }

  .Verilog {
    background: #b2b7f8;
  }

  .VHDL {
    background: #adb2cb;
  }

  .Vim-Help-File {
    background: #199f4b;
  }

  .Vim-Script {
    background: #199f4b;
  }

  .Vim-Snippet {
    background: #199f4b;
  }

  .Visual-Basic-.NET {
    background: #945db7;
  }

  .Visual-Basic-6 {
    background: #2c6353;
  }

  .Volt {
    background: #1f1f1f;
  }

  .Vue {
    background: #41b883;
  }

  .Vyper {
    background: #2980b9;
  }

  .wdl {
    background: #42f1f4;
  }

  .Web-Ontology-Language {
    background: #5b70bd;
  }

  .WebAssembly {
    background: #04133b;
  }

  .Whiley {
    background: #d5c397;
  }

  .Wikitext {
    background: #fc5757;
  }

  .Windows-Registry-Entries {
    background: #52d5ff;
  }

  .wisp {
    background: #7582d1;
  }

  .Witcher-Script {
    background: #ff0000;
  }

  .Wollok {
    background: #a23738;
  }

  .World-of-Warcraft-Addon-Data {
    background: #f7e43f;
  }

  .Wren {
    background: #383838;
  }

  .X10 {
    background: #4b6bef;
  }

  .xBase {
    background: #403a40;
  }

  .XC {
    background: #99da07;
  }

  .XML {
    background: #0060ac;
  }

  .XML-Property-List {
    background: #0060ac;
  }

  .Xojo {
    background: #81bd41;
  }

  .Xonsh {
    background: #285eef;
  }

  .XQuery {
    background: #5232e7;
  }

  .XSLT {
    background: #eb8ceb;
  }

  .Xtend {
    background: #24255d;
  }

  .Yacc {
    background: #4b6c4b;
  }

  .YAML {
    background: #cb171e;
  }

  .YARA {
    background: #220000;
  }

  .YASnippet {
    background: #32ab90;
  }

  .Yul {
    background: #794932;
  }

  .ZAP {
    background: #0d665e;
  }

  .ZenScript {
    background: #00bcd1;
  }

  .Zephir {
    background: #118f9e;
  }

  .Zig {
    background: #ec915c;
  }

  .ZIL {
    background: #dc75e5;
  }

  .Zimpl {
    background: #d67711;
  }
</style>
