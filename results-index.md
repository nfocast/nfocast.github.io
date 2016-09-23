---
title: Search results
layout: post
---
<head>
  <link href="http://fonts.googleapis.com/css?family=Open+Sans:300,400" rel="stylesheet">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>

  <script src="nfocast.github.io/tipuesearch/tipuesearch_content.js"></script>
  <link href="nfocast.github.io/tipuesearch/tipuesearch.css" rel="stylesheet">
  <script src="nfocast.github.io/tipuesearch/tipuesearch_set.js"></script>
  <script src="nfocast.github.io/tipuesearch/tipuesearch.min.js"></script>
</head>

        <form action="results-index.md">
        <input type="text" name="q" id="tipue_search_input" autocomplete="off" required>
</form>
    
    <div id="tipue_search_content"></div>

<script>
$(document).ready(function() {
     $('#tipue_search_input').tipuesearch();
});
</script>
