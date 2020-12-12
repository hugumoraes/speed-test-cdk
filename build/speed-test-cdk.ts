#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { SpeedTestCdkStack } from '../src/speed-test-cdk-stack';

const app = new cdk.App();
new SpeedTestCdkStack(app, 'SpeedTestCdkStack');
