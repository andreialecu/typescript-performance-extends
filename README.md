Run `yarn tsc --extendedDiagnostics`:

```
Files:                          7
Lines of Library:           24662
Lines of Definitions:        3022
Lines of TypeScript:           18
Lines of JavaScript:            0
Lines of JSON:                  0
Lines of Other:                 0
Nodes of Library:          110877
Nodes of Definitions:       14740
Nodes of TypeScript:           63
Nodes of JavaScript:            0
Nodes of JSON:                  0
Nodes of Other:                 0
Identifiers:                45586
Symbols:                    76446
Types:                      20569
Instantiations:             93884
Memory used:               93011K
Assignability cache size:    5146
Identity cache size:            0
Subtype cache size:             0
Strict subtype cache size:      0
I/O Read time:              0.00s
Parse time:                 0.23s
ResolveModule time:         0.00s
Program time:               0.24s
Bind time:                  0.11s
Check time:                 0.67s
transformTime time:         0.00s
commentTime time:           0.00s
I/O Write time:             0.00s
printTime time:             0.01s
Emit time:                  0.01s
Total time:                 1.04s
✨  Done in 1.28s.
```

Notice check time and number of instantiations.



Apply this diff:

```diff
diff --git a/types/mongoose.d.ts b/types/mongoose.d.ts
index 9e0ad99..2fab5ff 100644
--- a/types/mongoose.d.ts
+++ b/types/mongoose.d.ts
@@ -1232,7 +1232,7 @@ declare module 'mongoose' {
   type PostMiddlewareFunction<ThisType, ResType = any> = (this: ThisType, res: ResType, next: (err?: CallbackError) => void) => void | Promise<void>;
   type ErrorHandlingMiddlewareFunction<ThisType, ResType = any> = (this: ThisType, err: NativeError, res: ResType, next: (err?: CallbackError) => void) => void;
 
-  class Schema<DocType = Document, M extends Model<DocType, any, any> = Model<any, any, any>, SchemaDefinitionType = undefined, TInstanceMethods = ExtractMethods<M>> extends events.EventEmitter {
+  class Schema<DocType = Document, M = Model<any, any, any>, SchemaDefinitionType = undefined, TInstanceMethods = any> extends events.EventEmitter {
     /**
      * Create a new schema
      */
```

Results:

```
Files:                          7
Lines of Library:           24662
Lines of Definitions:        3022
Lines of TypeScript:           18
Lines of JavaScript:            0
Lines of JSON:                  0
Lines of Other:                 0
Nodes of Library:          110877
Nodes of Definitions:       14731
Nodes of TypeScript:           63
Nodes of JavaScript:            0
Nodes of JSON:                  0
Nodes of Other:                 0
Identifiers:                45582
Symbols:                    27736
Types:                        710
Instantiations:               818
Memory used:               59482K
Assignability cache size:     157
Identity cache size:            0
Subtype cache size:             0
Strict subtype cache size:      0
I/O Read time:              0.00s
Parse time:                 0.21s
ResolveModule time:         0.00s
Program time:               0.22s
Bind time:                  0.11s
Check time:                 0.03s
transformTime time:         0.00s
commentTime time:           0.00s
I/O Write time:             0.00s
printTime time:             0.01s
Emit time:                  0.01s
Total time:                 0.37s
✨  Done in 0.72s.
```