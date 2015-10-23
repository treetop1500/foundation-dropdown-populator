# foundation-dropdown-populator
Foundation Dropdown Poplulator is a jQuery plugin that allows you to turn Zurb Foundation's dropdown components into select menus to populate input field values.
##Installation##
###Install with Bower (Preferred)###
Run the following command from your public html directory
```
bower install foundation-dropdown-populator
```
###Install Manually###
Download the source files from the following link and copy them to where you keep your publicly accessible javascript files in your application.
https://github.com/treetop1500/foundation-dropdown-populator
Include a script tag that links the plugin before the closing body, and after jquery, foundation and foundation dropdown javascripts.
```
<script type='text/javascript' 
    src='/js/jquery.jquery.foundation-dropdown-populator/js/jquery.foundation-dropdown-populator.min.js'>
</script>
```
##Example Usage##
Each table cell has a 'rel' attribute that holds it's appropriate value. Note that the table also has the class of '.populate. Also make sure that each link that invokes the dropdown, and it's associated input are within a Foundation row of their own.
```
    <div class="row collapse">
        <div class="small-9 columns">
            <input type="text" id="input1" />
        </div>
        <div class="small-3 columns">
            <span class="postfix">
                <a data-dropdown="drop1"
                  aria-controls="drop1"
                  aria-expanded="false"
                  id="drop1">pick</a>
            </span>
        </div>
    </div>
    <div id="drop1"
      data-dropdown-content
      class="f-dropdown content medium"
      aria-hidden="true"
      tabindex="-1">
        <table class="populate">
            <tbody>
                <tr>
                    <td rel="40">40 lbs.</td>
                    <td rel="50">00x00 50 lbs.</td>
                    <td rel="60">00x00 60 lbs.</td>
                    <td rel="70">00x00 70 lbs.</td>
                </tr>
            </tbody>
        </table>
    </div>
```
Initialize the plugin.
```
    $(document).ready(function() {
        $('table.populate').dropdownPopulator();
    });
```

##Optional Configuration##
You can configure two properties on this plugin: debug and closeOnClick.  debug simply logs some information to the console at run time. closeOnClick will ensure that the dropdown closes when an option has been chosen.
```
    $(document).ready(function() {
        $('table.populate').dropdownPopulator({
            debug: true,
            closeOnClick: true
        });
    });
```
