# graphite-cli - CLI Tools for Graphite
graphite-cli is a set of command line tools created to make working with Graphite simpler. A crude set of commands are supported thus far:
* `cat` - Dumps raw dashboard definition to stdout
* `cp` - Copies source dashboard to target dashboard
* `diff` - Lists the differences in graphs between source and target dashboards
* `dump` - Dumps pretty printed dashboard to file of same name
* `dump-graphs` - Dumps pretty printed graphs in custom format to file of same name
* `ls` - Lists dashboards
* `ls-graphs` - Lists graphs in dashboard
* `ls-targets` - Lists all targets in all graphs in a dashboard
* `mv` - Moves source dashboard to target dashboard
* `rm` - Deletes dashboard
* `save-dump` - Saves dump back to dashboard
* `save-graphs` - Saves graphs dump back to dashboard
* `touch` - Creates a new, empty dashboard 

## Usage

### cat

Dumps raw dashboard definition to stdout

```bash
graphite-cli cat <dashboard-name>
```

### cp

Copies source dashboard to target dashboard

```bash
graphite-cli cp <source-dashboard-name> <target-dashboard-name>
```

### diff

Lists the differences in graphs between the source and target dashboards

```bash
graphite-cli diff <source-dashboard-name> <target-dashboard-name>
```

### dump

Dumps dashboard JSON to a file of the same name. JSON is pretty-printed and follows the same structure returned from Graphite. A `.json` file extension is added onto the file if one is not provided.

```bash
graphite-cli dump <dashboard-name>
```

### dump-graphs

Dumps dashboard JSON to a file of the same name. JSON is pretty-printed and follows a custom object structure to make graphs and associated targets/stats more readable and easy to edit. See `save-graphs` for the complement command. A `.json` file extension is added onto the file if one is not provided.

```bash
graphite-cli dump-graphs <dashboard-name>
```

The custom object structure is as follows:

```javascript
{
    "name": "DASHBOARD_NAME"
    "graphs": [
        {
            "title": "GRAPH_TITLE"
            "stats": [
                "FIRST_TARGET",
                "SECOND_TARGET",
                "etc"
            ] 
        }
    ]
}
```

### ls

Lists dashboards

```bash
graphite-cli ls
```

### ls-graphs

Lists graphs in a dashboard in alphabetical order.

```bash
graphite-cli ls-graphs <dashboard-name>
```

### ls-targets

Lists targets in all graphs of a dashboard in alphabetical order

```bash
graphite-cli ls-targets <dashboard-name>
```

### mv

Moves a dashboard from source to target

```bash
graphite-cli mv <source-dashboard-name> <target-dashboard-name>
```

### rm

Removes a dashboard

```bash
graphite-cli rm <dashboard-name>
```

### save-dump

Saves a dashboard dump (see `dump`) back to the dashboard of the same name. This is a destructive override. Be careful. The dashboard dump file extension is optional.

```bash
graphite-cli save-dump <dashboard-dump-filename>
```

### save-graphs

Saves a graph dump (see `dump-graphs`) back to the dashboard of the same name. This is a destructive override. Be careful. The graph dump file extension is optional.

```bash
graphite-cli save-graphs <graphs-dump-filename>
```

### touch

Creates a new, blank dashboard with the specified name.

```bash
graphite-cli touch <dashboard-name>
```
