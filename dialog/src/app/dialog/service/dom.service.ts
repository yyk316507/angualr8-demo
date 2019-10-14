import { Injectable, ComponentFactoryResolver, ApplicationRef, Injector, Inject, Type, EmbeddedViewRef, ComponentRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ChildConfig } from '../domain';

@Injectable({providedIn:"root"})
export class DomService {
    private childComponentRef: ComponentRef<any>;
    // ComponentFactoryResolver  组件工厂  ApplicationRef  应用本身
    constructor(
        private rosolver: ComponentFactoryResolver,
        private appRef: ApplicationRef,
        private injector: Injector,
        @Inject(DOCUMENT) private document: Document
    ){}
    public appendComponentTo(parentId: string,child: Type<any>,childConfig:ChildConfig){
        const childComponentRef = this.rosolver.resolveComponentFactory(child).create(this.injector)   
        this.attachConfig(childConfig,childComponentRef)
        this.childComponentRef = childComponentRef
        this.appRef.attachView(childComponentRef.hostView)
        const childDOMElement = (childComponentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement
        this.document.getElementById(parentId).appendChild(childDOMElement)
    }
    public attachConfig(config: ChildConfig,componentRef: ComponentRef<any>){
        const inputs = config.inputs;
        const outputs = config.outputs
        for (const key in inputs) {
            if (inputs.hasOwnProperty(key)) {
                const element = inputs[key];
                componentRef.instance[key] = element;
            }
        }
        for (const key in outputs) {
            if (outputs.hasOwnProperty(key)) {
                const element = outputs[key];
                componentRef.instance[key] = element;
            }
        }
    }
    public removeComponent(){
        this.appRef.detachView(this.childComponentRef.hostView)
    }
}