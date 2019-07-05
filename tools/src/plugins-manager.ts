import * as pm from './pages-scanner';
import * as webpack from 'webpack';
import * as info from './infox';
import * as path from 'path';
export function getPlugins():Array<any>{
    let result = new Array<any>();
    pm.getPages().forEach((e,index)=>{
        result[index] = e.plugin;
    });;
    return result;
}
if (require.main === module)
{
    console.log(getPlugins()[1]);
} else {
    // console.log('required as a module');
}