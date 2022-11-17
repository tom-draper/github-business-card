<script lang="ts">
  function languageToTag(language: string) {
    return language.replace(' ', '-').replace('+', 'Plus').replace('#', 'Sharp')
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
      <div class="language {languageToTag(language[0])}" style="flex: {language[1]};" />
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
    border-radius: 4px 4px 6px 6px;
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

  /* .ABAP {
    background: #e8274b;
  }
  .ActionScript {
    background: #882b0f;
  }
  .Ada {
    background: #02f88c;
  }
  .Agda {
    background: #315665;
  }
  .AGS-Script {
    background: #b9d9ff;
  }
  .Alloy {
    background: #64c800;
  }
  .AMPL {
    background: #e6efbb;
  }
  .ANTLR {
    background: #9dc3ff;
  }
  .API-Blueprint {
    background: #2acca8;
  }
  .APL {
    background: #5a8164;
  }
  .Arc {
    background: #aa2afe;
  }
  .Arduino {
    background: #bd79d1;
  }
  .ASP {
    background: #6a40fd;
  }
  .AspectJ {
    background: #a957b0;
  }
  .Assembly {
    background: #6e4c13;
  }
  .ATS {
    background: #1ac620;
  }
  .AutoHotkey {
    background: #6594b9;
  }
  .AutoIt {
    background: #1c3552;
  }
  .BlitzMax {
    background: #cd6400;
  }
  .Boo {
    background: #d4bec1;
  }
  .Brainfuck {
    background: #2f2530;
  }
  .C-Sharp {
    background: #178600;
  }
  .C {
    background: #555555;
  }
  .Chapel {
    background: #8dc63f;
  }
  .Cirru {
    background: #ccccff;
  }
  .Clarion {
    background: #db901e;
  }
  .Clean {
    background: #3f85af;
  }
  .Click {
    background: #e4e6f3;
  }
  .Clojure {
    background: #db5855;
  }
  .CoffeeScript {
    background: #244776;
  }
  .ColdFusion-CFC {
    background: #ed2cd6;
  }
  .ColdFusion {
    background: #ed2cd6;
  }
  .Common-Lisp {
    background: #3fb68b;
  }
  .Component-Pascal {
    background: #b0ce4e;
  }
  .cpp {
    background: #f34b7d;
  }
  .Crystal {
    background: #776791;
  }
  .CSS {
    background: #563d7c;
  }
  .D {
    background: #ba595e;
  }
  .Dart {
    background: #00b4ab;
  }
  .Diff {
    background: #88dddd;
  }
  .DM {
    background: #447265;
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
  .Eagle {
    background: #814c05;
  }
  .eC {
    background: #913960;
  }
  .ECL {
    background: #8a1267;
  }
  .edn {
    background: #db5855;
  }
  .Eiffel {
    background: #946d57;
  }
  .Elixir {
    background: #6e4a7e;
  }
  .Elm {
    background: #60b5cc;
  }
  .Emacs-Lisp {
    background: #c065db;
  }
  .EmberScript {
    background: #fff4f3;
  }
  .Erlang {
    background: #b83998;
  }
  .F-Sharp {
    background: #b845fc;
  }
  .Factor {
    background: #636746;
  }
  .Fancy {
    background: #7b9db4;
  }
  .Fantom {
    background: #dbded5;
  }
  .FLUX {
    background: #88ccff;
  }
  .Forth {
    background: #341708;
  }
  .FORTRAN {
    background: #4d41b1;
  }
  .FreeMarker {
    background: #0050b2;
  }
  .Frege {
    background: #00cafe;
  }
  .Game-Maker-Language {
    background: #8fb200;
  }
  .Glyph {
    background: #e4cc98;
  }
  .Gnuplot {
    background: #f0a9f0;
  }
  .Go {
    background: #375eab;
  }
  .Golo {
    background: #88562a;
  }
  .Gosu {
    background: #82937f;
  }
  .Grammatical-Framework {
    background: #79aa7a;
  }
  .Groovy {
    background: #e69f56;
  }
  .Handlebars {
    background: #01a9d6;
  }
  .Harbour {
    background: #0e60e3;
  }
  .Haskell {
    background: #29b544;
  }
  .Haxe {
    background: #df7900;
  }
  .HTML {
    background: #e44b23;
  }
  .Hy {
    background: #7790b2;
  }
  .IDL {
    background: #a3522f;
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
  .J {
    background: #9eedff;
  }
  .Java {
    background: #b07219;
  }
  .JavaScript {
    background: #f1e05a;
  }
  .JFlex {
    background: #dbca00;
  }
  .JSONiq {
    background: #40d47e;
  }
  .Julia {
    background: #a270ba;
  }
  .Jupyter-Notebook {
    background: #da5b0b;
  }
  .Kotlin {
    background: #f18e33;
  }
  .KRL {
    background: #28431f;
  }
  .Lasso {
    background: #999999;
  }
  .Latte {
    background: #a8ff97;
  }
  .Lex {
    background: #dbca00;
  }
  .LFE {
    background: #004200;
  }
  .LiveScript {
    background: #499886;
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
  .Makefile {
    background: #427819;
  }
  .Mask {
    background: #f97732;
  }
  .Matlab {
    background: #bb92ac;
  }
  .Max {
    background: #c4a79c;
  }
  .MAXScript {
    background: #00a6a6;
  }
  .Mercury {
    background: #ff2b2b;
  }
  .Metal {
    background: #8f14e9;
  }
  .Mirah {
    background: #c7a938;
  }
  .MTML {
    background: #b7e1f4;
  }
  .NCL {
    background: #28431f;
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
  .Nimrod {
    background: #37775b;
  }
  .Nit {
    background: #009917;
  }
  .Nix {
    background: #7e7eff;
  }
  .Nu {
    background: #c9df40;
  }
  .Objective-C {
    background: #438eff;
  }
  .Objective-Cpp {
    background: #6866fb;
  }
  .Objective-J {
    background: #ff0c5a;
  }
  .OCaml {
    background: #3be133;
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
  .Oxygene {
    background: #cdd0e3;
  }
  .Oz {
    background: #fab738;
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
    background: #b0ce4e;
  }
  .PAWN {
    background: #dbb284;
  }
  .Perl {
    background: #0298c3;
  }
  .Perl6 {
    background: #0000fb;
  }
  .PHP {
    background: #4f5d95;
  }
  .PigLatin {
    background: #fcd7de;
  }
  .Pike {
    background: #005390;
  }
  .PLSQL {
    background: #dad8d8;
  }
  .PogoScript {
    background: #d80074;
  }
  .Processing {
    background: #0096d8;
  }
  .Prolog {
    background: #74283c;
  }
  .Propeller-Spin {
    background: #7fa2a7;
  }
  .Puppet {
    background: #302b6d;
  }
  .PureData {
    background: #91de79;
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
  .QML {
    background: #44a51c;
  }
  .R {
    background: #198ce7;
  }
  .Racket {
    background: #22228f;
  }
  .Ragel-in-Ruby-Host {
    background: #9d5200;
  }
  .RAML {
    background: #77d9fb;
  }
  .Rebol {
    background: #358a5b;
  }
  .Red {
    background: #ee0000;
  }
  .Ren-Py {
    background: #ff7f7f;
  }
  .Rouge {
    background: #cc0088;
  }
  .Ruby {
    background: #701516;
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
  .Scala {
    background: #dc322f;
  }
  .Scheme {
    background: #1e4aec;
  }
  .Self {
    background: #0579aa;
  }
  .Shell {
    background: #89e051;
  }
  .Shen {
    background: #120f14;
  }
  .Slash {
    background: #007eff;
  }
  .Slim {
    background: #ff8f77;
  }
  .Smalltalk {
    background: #596706;
  }
  .SourcePawn {
    background: #5c7611;
  }
  .SQF {
    background: #3f3f3f;
  }
  .Squirrel {
    background: #800000;
  }
  .Stan {
    background: #b2011d;
  }
  .Standard-ML {
    background: #dc566d;
  }
  .SuperCollider {
    background: #46390b;
  }
  .Swift {
    background: #ffac45;
  }
  .SystemVerilog {
    background: #dae1c2;
  }
  .Tcl {
    background: #e4cc98;
  }
  .TeX {
    background: #3d6117;
  }
  .Turing {
    background: #45f715;
  }
  .TypeScript {
    background: #2b7489;
  }
  .Unified-Parallel-C {
    background: #4e3617;
  }
  .Unity3D-Asset {
    background: #ab69a1;
  }
  .UnrealScript {
    background: #a54c4d;
  }
  .Vala {
    background: #fbe5cd;
  }
  .Verilog {
    background: #b2b7f8;
  }
  .VHDL {
    background: #adb2cb;
  }
  .VimL {
    background: #199f4b;
  }
  .Visual-Basic {
    background: #945db7;
  }
  .Volt {
    background: #1f1f1f;
  }
  .Vue {
    background: #2c3e50;
  }
  .Web-Ontology-Language {
    background: #9cc9dd;
  }
  .wisp {
    background: #7582d1;
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
  .XQuery {
    background: #5232e7;
  }
  .Zephir {
    background: #118f9e;
  } */
</style>
