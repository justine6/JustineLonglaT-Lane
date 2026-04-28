output "vpc_id" {
  value = aws_vpc.main.id
}

output "public_subnet_id" {
  value = aws_subnet.public.id
}

output "private_app_subnet_id" {
  value = aws_subnet.private_app.id
}

output "private_data_subnet_id" {
  value = aws_subnet.private_data.id
}

output "edge_node_public_ip" {
  value = aws_instance.edge_node.public_ip
}

output "edge_node_private_ip" {
  value = aws_instance.edge_node.private_ip
}

output "app_node_private_ip" {
  value = aws_instance.app_node.private_ip
}