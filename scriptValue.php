<?php

$program_base_path = dirname(__FILE__);

$scriptValueRaw = file($program_base_path.DIRECTORY_SEPARATOR.'scriptValue.js');

$scriptValueConvertedFile = $program_base_path.DIRECTORY_SEPARATOR.'scriptValueCompiled.js';

$javascriptFileApp = file_get_contents($program_base_path.DIRECTORY_SEPARATOR.'javascript.js');

$jsCompiledAppFile = $program_base_path.DIRECTORY_SEPARATOR.'AppCompiled.js';

foreach ($scriptValueRaw AS $element => $value) {
  $value = str_replace("\n", '', $value);
  $value = str_replace("\r", '', $value);
  if (!strlen($value)) {
    unset($scriptValueRaw[$element]);
    continue;
  }
  
  $scriptValueRaw[$element] = str_replace('\\', '\\\\', $value);
  $scriptValueRaw[$element] = str_replace('"', '\"', $value);
}

$scriptValueOutput = '"'.implode('\n"+'."\n".'"', $scriptValueRaw).'"';

// print_r($scriptValueRaw);
// var_dump($scriptValueRaw);

// echo "\n";

// echo $scriptValueOutput;
// echo "\n";

$f = fopen ($scriptValueConvertedFile, 'w');
fwrite($f, $scriptValueOutput);
fclose($f);

echo "scriptValue.js converted an saved to scriptValueCompiled.js\n";

$AppContentsOutput = str_replace('{{%scriptValue}}', $scriptValueOutput, $javascriptFileApp);


$f = fopen ($jsCompiledAppFile, 'w');
fwrite($f, $AppContentsOutput);
fclose($f);

echo "compiled app js saved to AppCompiled.js\n";