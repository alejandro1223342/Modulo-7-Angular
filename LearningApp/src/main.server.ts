import { BootstrapContext, bootstrapApplication } from '@angular/platform-browser';
import { LearningComponent } from './app/component/learning/learning';
import { config } from './app/app.config.server';

const bootstrap = (context: BootstrapContext) =>
    bootstrapApplication(LearningComponent, config, context);

export default bootstrap;
