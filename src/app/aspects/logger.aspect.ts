import {Wove, 
  Metadata, 
  MethodMetadata, 
  beforeMethod, 
  afterMethod, 
  beforeStaticMethod,
  afterStaticMethod,
  onThrowOfMethod,
  onThrowOfStaticMethod
} from 'aspect.js/dist/lib/aspect';

export class LoggerAspect {

  @beforeStaticMethod({ classNamePattern: /.*/, methodNamePattern: /.*/})
  beforeStatic(meta: Metadata) {
    //console.log(`TW: AFTER: ${meta.className}.${meta.method.name} with result ${meta.method.result}`);
  }

  @beforeMethod({ classNamePattern: /.*/, methodNamePattern: /.*/})
  before(meta: Metadata) {
    //console.log(`TW: BEFORE: ${meta.className}.${meta.method.name} with args ${meta.method.args.join(', ')}`);
  }

  @afterMethod({ classNamePattern: /.*/, methodNamePattern: /.*/})
  after(meta: Metadata) {
    //console.log(`TW: AFTER: ${meta.className}.${meta.method.name} with result ${meta.method.result}`);
  }

  @afterStaticMethod({ classNamePattern: /.*/, methodNamePattern: /.*/})
  afterStaticMethod(meta: Metadata) {
    //console.log(`TW: AFTER: ${meta.className}.${meta.method.name} with result ${meta.method.result}`);
  }

  // @onThrowOfMethod({ classNamePattern: /.*/, methodNamePattern: /.*/})
  // @onThrowOfStaticMethod({ classNamePattern: /.*/, methodNamePattern: /.*/})
  // afterThrow(meta: Metadata) {
  //   console.log(`TW: THROW: ${meta.className}.${meta.method.name} throwed ${meta.method.exception}`);
  // }
}