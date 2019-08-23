<template>
	<div class="content">
		<div class="card">
			<div class="card-header">
				<h1 class="title">
					{{ title }}
				</h1>
			</div>
			<div class="card-body">
				<div class="card-body_text">
					<label>
						IP Address:
					</label>
					<p>{{ data.IPAddr }}</p>
				</div>
				<div class="card-body_text">
					<label>
						Subnet Mask:
					</label>
					<p>{{ data.subnetMask }}</p>
				</div>
				<div class="card-body_text">
					<label>
						Management Address Type:
					</label>
					<p>{{ addressType }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Http from '@/controllers/Http';

export default {
	name: 'NetworkSettings',
	
	data() {
		return {
			data: {
				IPAddr: '0.0.0.0',
				subnetMask: '255.255.255.255',
				owner: '2'
			},
			sections: {
				wcd: [
					'ManagementIpv4AddressTable'
				]
			}
		};
	},
	props: {
		title: {
			type: String,
			default: 'Network settings',
			required: true
		}
	},
	mounted() {
		Http
			.get(this.sections)
			.then(response => {
				const status = parseInt(response.ResponseData.ActionStatus.statusCode);
				if (!status) {
					this.data = response.ResponseData.DeviceConfiguration.ManagementIpv4AddressTable.Entry[0]
				}
			});
	},
	computed: {
		addressType: function () {
			return this.data.owner === '2' ? 'DHCP' : 'Static';
		}
	}
}
</script>

<style>
.title {
	text-align: center;
}
</style>