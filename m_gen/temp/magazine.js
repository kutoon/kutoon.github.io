var html_s1 = document.getElementById("html_s1").innerHTML;
var html_s2 = document.getElementById("html_s2").innerHTML;
var html_s3 = document.getElementById("html_s3").innerHTML;
var html_s4 = document.getElementById("html_s4").innerHTML;
var html_s5 = document.getElementById("html_s5").innerHTML;
var html_s6 = document.getElementById("html_s6").innerHTML;
var html_s7 = document.getElementById("html_s7").innerHTML;
var html_s8 = document.getElementById("html_s8").innerHTML;
var html_s9 = document.getElementById("html_s9").innerHTML;
var html_s10 = document.getElementById("html_s10").innerHTML;
var html_s11 = document.getElementById("html_s11").innerHTML;
var html_s12 = document.getElementById("html_s12").innerHTML;
var html_s13 = document.getElementById("html_s13").innerHTML;
var html_s14 = document.getElementById("html_s14").innerHTML;
var html_s15 = document.getElementById("html_s15").innerHTML;
var html_s16 = document.getElementById("html_s16").innerHTML;
var html_s17 = document.getElementById("html_s17").innerHTML;
var html_s18 = document.getElementById("html_s18").innerHTML;
var html_s19 = document.getElementById("html_s19").innerHTML;
var html_s20 = document.getElementById("html_s20").innerHTML;
//
var alt_html_s1 = document.getElementById("alt_html_s1").innerHTML;
var alt_html_s2 = document.getElementById("alt_html_s2").innerHTML;
var alt_html_s3 = document.getElementById("alt_html_s3").innerHTML;
var alt_html_s4 = document.getElementById("alt_html_s4").innerHTML;
var alt_html_s5 = document.getElementById("alt_html_s5").innerHTML;
var alt_html_s6 = document.getElementById("alt_html_s6").innerHTML;
var alt_html_s7 = document.getElementById("alt_html_s7").innerHTML;
var alt_html_s8 = document.getElementById("alt_html_s8").innerHTML;
var alt_html_s9 = document.getElementById("alt_html_s9").innerHTML;
var alt_html_s10 = document.getElementById("alt_html_s10").innerHTML;
var alt_html_s11 = document.getElementById("alt_html_s11").innerHTML;
var alt_html_s12 = document.getElementById("alt_html_s12").innerHTML;
var alt_html_s13 = document.getElementById("alt_html_s13").innerHTML;
var alt_html_s14 = document.getElementById("alt_html_s14").innerHTML;
var alt_html_s15 = document.getElementById("alt_html_s15").innerHTML;
var alt_html_s16 = document.getElementById("alt_html_s16").innerHTML;
var alt_html_s17 = document.getElementById("alt_html_s17").innerHTML;
var alt_html_s18 = document.getElementById("alt_html_s18").innerHTML;
var alt_html_s19 = document.getElementById("alt_html_s19").innerHTML;
var alt_html_s20 = document.getElementById("alt_html_s20").innerHTML;

var html1 = '<!DOCTYPE html><html><head><meta charset="utf-8"><meta content="width=device-width, initial-scale=1" name="viewport"><link href="http://ntttoon.github.io/mg_assets/mg.css" rel="stylesheet"><title>NTTTOON</title><meta property="og:image" content="Link file hinh"/><meta property="og:title" content="Dat tieu de" /><meta property="og:description" content="Dat mo ta"/><meta property="og:url" content="Link duong dan chinh xac den file html nay" /><link href="https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i&amp;subset=latin-ext,vietnamese" rel="stylesheet"><link href="http://ntttoon.github.io/mg_assets/image-comparison-slider.css" rel="stylesheet"></head><body>';

var slidescript ='<script src="http://ntttoon.github.io/mg_assets/w3_slides.js"></script> <script src="http://ntttoon.github.io/mg_assets/image-comparison-slider.js"></script>';
var html2 ='<br><br></body></html>';

var html = html1 + html_s1 + html_s2 + html_s3 + html_s4 + html_s5 + html_s6 + html_s7 + html_s8 + html_s9 + html_s10 + html_s11 + html_s12 + html_s13 + html_s14 + html_s15 + html_s16 + html_s17 + html_s18 + html_s19 + html_s20 + slidescript + html2;
var result = html;

var alt_html = html1 + alt_html_s1 + alt_html_s2 + alt_html_s3 + alt_html_s4 + alt_html_s5 + alt_html_s6 + alt_html_s7 + alt_html_s8 + alt_html_s9 + alt_html_s10 + alt_html_s11 + alt_html_s12 + alt_html_s13 + alt_html_s14 + alt_html_s15 + alt_html_s16 + alt_html_s17 + alt_html_s18 + alt_html_s19 + alt_html_s20 + slidescript + html2;
var result2 = tidy_html5(alt_html, options);
